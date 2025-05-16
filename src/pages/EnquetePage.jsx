import React, { useEffect, useState } from 'react';

const EnquetePage = () => {
  const [sections, setSections] = useState([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submissionId, setSubmissionId] = useState(null);

  // Start nieuwe submission
  const startSubmission = async () => {
    if (submissionId) return submissionId;

    const res = await fetch('http://localhost:3306/api/survey/start', {
      method: 'POST',
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Fout bij starten van submission:', res.status, text);
      throw new Error('Kan submission niet starten');
    }

    const data = await res.json();
    if (data.submission_id) {
      setSubmissionId(data.submission_id);
      return data.submission_id;
    } else {
      throw new Error('Ongeldige response van backend');
    }
  };

  useEffect(() => {
    fetch('http://localhost:3306/api/survey/sections')
      .then(res => res.json())
      .then(setSections)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!sections.length) return;

    setLoading(true);
    const sectionId = sections[currentSectionIndex].id;
    fetch(`http://localhost:3306/api/survey/questions/${sectionId}`)
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setAnswers({});
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [currentSectionIndex, sections]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = async () => {
    if (questions.some(q => !answers[q.id])) {
      alert('Vul alle vragen in voordat je verder gaat');
      return;
    }

    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(i => i + 1);
      setSubmitStatus(null);
    } else {
      try {
        const id = await startSubmission();

        const payload = {
          submission_id: id,
          answers: questions.map(q => {
            const answer = answers[q.id];
            if (typeof answer === 'string' && !isNaN(answer)) {
              return { question_id: q.id, answer_id: Number(answer) };
            } else if (typeof answer === 'string') {
              return { question_id: q.id, open_text: answer };
            } else {
              return { question_id: q.id, answer_id: answer };
            }
          }),
        };

        const res = await fetch('http://localhost:3306/api/survey/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(text);
        }

        const data = await res.json();
        if (data.success) {
          setSubmitStatus('Bedankt voor het invullen!');
          setCurrentSectionIndex(0);
          setQuestions([]);
          setAnswers({});
          setSubmissionId(null);
        } else {
          setSubmitStatus('Er is iets misgegaan.');
        }
      } catch (err) {
        console.error(err);
        setSubmitStatus('Er is iets misgegaan.');
      }
    }
  };

  if (!sections.length) return <p className="text-center mt-20">Bezig met laden van secties...</p>;
  if (loading) return <p className="text-center mt-20">Vragen laden...</p>;

  return (
    <div className="w-full min-h-[auto] flex flex-col items-center pt-20 md:pt-28">
      <div className="w-[80%] max-w-4xl flex flex-col gap-12">
        <h2 className="text-3xl font-bold mb-6">{sections[currentSectionIndex].title}</h2>

        <form
          onSubmit={e => {
            e.preventDefault();
            handleNext();
          }}
          className="flex flex-col gap-8"
        >
          {questions.map(q => (
            <div key={q.id} className="flex flex-col gap-3">
              <p className="font-semibold">{q.text}</p>
              <div className="flex flex-col gap-2">
                {q.answers?.length ? (
                  q.answers.map(a => (
                    <label key={a.id} className="cursor-pointer flex items-center gap-2">
                      <input
                        type="radio"
                        name={`question_${q.id}`}
                        value={a.id}
                        checked={answers[q.id] === a.id}
                        onChange={() => handleAnswerChange(q.id, a.id)}
                        className="accent-blue-600"
                      />
                      <span>{a.text}</span>
                    </label>
                  ))
                ) : (
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

        {submitStatus && (
          <p className="mt-6 text-center text-green-600 font-semibold">{submitStatus}</p>
        )}
      </div>
    </div>
  );
};

export default EnquetePage;
