// EnquetePage: volledige werkende versie
import React, { useEffect, useState } from 'react';

const EnquetePage = () => {
  const [sections, setSections] = useState([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submissionId, setSubmissionId] = useState(null);

  const startSubmission = async () => {
    if (submissionId) return submissionId;
    const res = await fetch('http://localhost:3000/api/survey/start', { method: 'POST' });
    const data = await res.json();
    if (data.submission_id) {
      setSubmissionId(data.submission_id);
      return data.submission_id;
    } else throw new Error('Kon geen submission starten');
  };

  useEffect(() => {
    fetch('http://localhost:3000/api/survey/sections')
      .then(res => res.json())
      .then(setSections)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!sections.length) return;
    setLoading(true);
    fetch(`http://localhost:3000/api/survey/questions/${sections[currentSectionIndex].id}`)
      .then(res => res.json())
      .then(data => {
        const sorted = [...data].sort((a, b) => a.order - b.order);
        setQuestions(
          sorted.map((q, index) => ({
            ...q,
            number: index + 1,
            answers: q.answers || [],
          }))
        );
        setAnswers({});
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [currentSectionIndex, sections]);

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleCheckboxChange = (questionId, answerId) => {
    const prev = answers[questionId] || [];
    const updated = prev.includes(answerId)
      ? prev.filter(id => id !== answerId)
      : [...prev, answerId];
    setAnswers(prevState => ({ ...prevState, [questionId]: updated }));
  };

  const handleNext = async () => {
    const incomplete = questions.some(q => {
      const a = answers[q.id];
      return !(a && (typeof a === 'string' || typeof a === 'object' || Array.isArray(a)));
    });
    if (incomplete) return alert('Vul alle vragen in voordat je verder gaat');

    try {
      const id = await startSubmission();
      const payload = {
        submission_id: id,
        answers: questions.flatMap(q => {
          const answer = answers[q.id];
          if (Array.isArray(answer)) {
            return answer.map(aid => ({ question_id: q.id, answer_id: aid }));
          } else if (typeof answer === 'object' && answer.selected) {
            return [{ question_id: q.id, answer_id: answer.selected, open_text: answer.text || null }];
          } else if (typeof answer === 'string') {
            return [{ question_id: q.id, open_text: answer }];
          }
          return [];
        }),
      };

      const res = await fetch('http://localhost:3000/api/survey/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error('Submit mislukt');

      if (currentSectionIndex < sections.length - 1) {
        setCurrentSectionIndex(i => i + 1);
        setSubmitStatus(null);
      } else {
        setSubmitStatus('Bedankt voor het invullen!');
        setCurrentSectionIndex(0);
        setQuestions([]);
        setAnswers({});
        setSubmissionId(null);
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('Er is iets misgegaan.');
    }
  };

  if (!sections.length || loading) return <p>Laden...</p>;

  return (
    <div className="w-full min-h-[auto] flex flex-col items-center pt-20 md:pt-28">
      <div className="w-[80%] max-w-4xl flex flex-col gap-12">
        <h2 className="text-3xl font-bold mb-6">{sections[currentSectionIndex].title}</h2>

        <form onSubmit={e => { e.preventDefault(); handleNext(); }} className="flex flex-col gap-8">
          {questions.map((q, index) => (
            <div key={q.id} className="flex flex-col gap-3">
              <p className="font-semibold">Vraag {q.number}. {q.text}</p>
              <div className="flex flex-col gap-2">
                {/* Checkbox-vraag specifiek: vraag 4 in sectie 2 */}
                {q.answers.length > 0 && !(index === questions.length - 1) ? (
                  (q.number === 4 && sections[currentSectionIndex]?.id === 2) ? (
                    q.answers.map(a => (
                      <label key={a.id} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          value={a.id}
                          checked={(answers[q.id] || []).includes(a.id)}
                          onChange={() => handleCheckboxChange(q.id, a.id)}
                          className="accent-blue-600"
                        />
                        <span>{a.text}</span>
                      </label>
                    ))
                  ) : (
                    q.answers.map(a => (
                      <div key={a.id} className="flex flex-col">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name={`question_${q.id}`}
                            value={a.id}
                            checked={answers[q.id]?.selected === a.id}
                            onChange={() => handleAnswerChange(q.id, { selected: a.id })}
                            className="accent-blue-600"
                          />
                          <span>{a.text}</span>
                        </label>
                        {answers[q.id]?.selected === a.id && a.text.toLowerCase().includes('anders') && (
                          <textarea
                            value={answers[q.id]?.text || ''}
                            onChange={e => handleAnswerChange(q.id, { ...answers[q.id], text: e.target.value })}
                            className="border border-gray-300 rounded p-2 mt-1"
                            rows={2}
                            placeholder="Licht je antwoord toe..."
                          />
                        )}
                      </div>
                    ))
                  )
                ) : (
                  // Altijd een tekstveld bij de laatste vraag of open vraag
                  <textarea
                    value={answers[q.id] || ''}
                    onChange={e => handleAnswerChange(q.id, e.target.value)}
                    className="border border-gray-300 rounded p-2"
                    rows={3}
                    placeholder="Typ je antwoord hier..."
                  />
                )}
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="w-max px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {currentSectionIndex < sections.length - 1 ? 'Volgende' : 'Verstuur'}
          </button>
        </form>

        {submitStatus && <p className="mt-6 text-center text-green-600 font-semibold">{submitStatus}</p>}
      </div>
    </div>
  );
};

export default EnquetePage;
