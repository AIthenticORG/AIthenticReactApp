import React, { useEffect, useState } from 'react';

const API_BASE = 'http://localhost:3306/api/survey'; // Pas aan naar juiste poort en base url

const EnquetePage = () => {
  const [sections, setSections] = useState([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({}); // bewaar antwoorden van alle secties samen
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Laad secties bij eerste render
  useEffect(() => {
    fetch(`${API_BASE}/sections`)
      .then(res => res.json())
      .then(setSections)
      .catch(console.error);
  }, []);

  // Laad vragen zodra secties geladen zijn en sectie verandert
  useEffect(() => {
    if (!sections.length) return;

    const sectionId = sections[currentSectionIndex]?.id;
    if (!sectionId) return;

    setLoading(true);
    fetch(`${API_BASE}/questions/${sectionId}`)
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [currentSectionIndex, sections]);

  // Handle antwoord veranderen, bewaar alle antwoorden in 1 object
  const handleAnswerChange = (questionId, answerId) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
  };

  // Handle open tekst voor sectie 6 (vraag 53)
  const handleTextChange = (questionId, text) => {
    setAnswers(prev => ({ ...prev, [questionId]: text }));
  };

  const handleNext = () => {
    // Check of alle vragen in huidige sectie beantwoord zijn
    const unanswered = questions.some(q => {
      // Als het een open tekstvraag is (bijv. vraag 53), check op niet lege string
      if (q.type === 'open') {
        return !answers[q.id] || answers[q.id].trim() === '';
      }
      return !answers[q.id];
    });
    if (unanswered) {
      alert('Vul alle vragen in voordat je verder gaat');
      return;
    }

    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(i => i + 1);
      setSubmitStatus(null);
    } else {
      // Verzenden van alle antwoorden
      // Maak payload: vraag id + antwoord id of tekst
      const payload = Object.entries(answers).map(([question_id, answer]) => ({
        question_id: Number(question_id),
        answer: answer,
      }));

      fetch(`${API_BASE}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: payload }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setSubmitStatus('Bedankt voor het invullen!');
            setCurrentSectionIndex(0);
            setQuestions([]);
            setAnswers({});
          } else {
            setSubmitStatus('Er is iets misgegaan.');
          }
        })
        .catch(() => setSubmitStatus('Er is iets misgegaan.'));
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

              {q.type === 'open' ? (
                <textarea
                  value={answers[q.id] || ''}
                  onChange={e => handleTextChange(q.id, e.target.value)}
                  className="border p-2 rounded resize-y"
                  rows={4}
                />
              ) : (
                <div className="flex flex-col gap-2">
                  {q.answers.map(a => (
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
                  ))}
                </div>
              )}
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
