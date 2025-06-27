
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VragenlijstPage = () => {
  const [vragenlijst, setVragenlijst] = useState([]);
  const [huidigeSectie, setHuidigeSectie] = useState(0);
  const [antwoorden, setAntwoorden] = useState({});
  const [verzonden, setVerzonden] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/api/vragenlijst', { withCredentials: true })
      .then(res => {
        const gegroepeerd = groeperenPerSectie(res.data);
        setVragenlijst(gegroepeerd);
      })
      .catch(err => console.error('Fout bij ophalen vragenlijst:', err));
  }, []);

  const groeperenPerSectie = (data) => {
    const secties = {};
    data.forEach(row => {
      if (!secties[row.section_id]) {
        secties[row.section_id] = {
          section_id: row.section_id,
          section_title: row.section_title,
          vragen: []
        };
      }

      let vraag = secties[row.section_id].vragen.find(v => v.question_number === row.question_number);
      if (!vraag) {
        vraag = {
          question_number: row.question_number,
          question_text: row.question_text,
          has_extra_option: row.has_extra_option,
          story_text: row.story_text,
          antwoorden: []
        };
        secties[row.section_id].vragen.push(vraag);
      }

      if (row.answer_number !== null) {
        vraag.antwoorden.push({
          answer_number: row.answer_number,
          answer_text: row.answer_text,
          points: row.points
        });
      }
    });

    return Object.values(secties);
  };

  const handleChange = (question_number, answer_number, hasExtra, extraText = '') => {
    setAntwoorden(prev => ({
      ...prev,
      [question_number]: {
        answer_number,
        answer_text: hasExtra ? extraText : ''
      }
    }));
  };

  const handleExtraTextChange = (question_number, text) => {
    setAntwoorden(prev => ({
      ...prev,
      [question_number]: {
        ...prev[question_number],
        answer_text: text
      }
    }));
  };

  const alleVragenIngevuld = () => {
    const huidigeVragen = vragenlijst[huidigeSectie]?.vragen || [];
    return huidigeVragen.every(vraag => {
      const antwoord = antwoorden[vraag.question_number];
      const heeftAntwoord = antwoord && antwoord.answer_number !== undefined;
      const heeftExtra = vraag.has_extra_option === 1;
      const extraIngevuld = !heeftExtra || (antwoord.answer_text && antwoord.answer_text.trim() !== '');
      return heeftAntwoord && extraIngevuld;
    });
  };

  const handleSubmit = () => {
    const userId = 1;
    const payload = Object.entries(antwoorden).map(([question_number, antwoord]) => {
      const vraag = vragenlijst.flatMap(s => s.vragen).find(v => v.question_number === parseInt(question_number));
      return {
        section_id: vragenlijst.find(s => s.vragen.some(v => v.question_number === parseInt(question_number)))?.section_id,
        question_number: parseInt(question_number),
        answer_number: antwoord.answer_number,
        answer_text: antwoord.answer_text,
        userId
      };
    });

    axios.post('http://localhost:3000/api/submit', { antwoorden: payload, userId }, { withCredentials: true })
      .then(() => setVerzonden(true))
      .catch(err => console.error('Fout bij verzenden:', err));
  };

  const getFilteredAntwoordenVoorVraag6 = () => {
    const antwoord5 = antwoorden[5]?.answer_number;
    if (!antwoord5) return [];

    const mapping = {
      1: [1, 2, 3, 4],
      2: [5, 6, 7, 8],
      3: [9, 10, 11],
      4: [12, 13, 14],
      5: [15, 16],
      6: [17, 18],
      7: [19, 20, 21, 22],
      8: [23, 24, 25],
      9: [26, 27],
      10: [28, 29],
      11: [30, 31],
      12: [32, 33]
    };

    return mapping[antwoord5] || [];
  };

  if (verzonden) {
    return <div className="p-6 text-green-600 mt-24">Bedankt voor het invullen van de vragenlijst!</div>;
  }

  const huidige = vragenlijst[huidigeSectie];

  return (
    <div className="max-w-3xl mx-auto p-6 pt-24">
      <h2 className="text-2xl font-bold mb-4">{huidige?.section_title}</h2>

      {huidige?.vragen.map(vraag => {
        if (vraag.question_number === 6 && !antwoorden[5]?.answer_number) {
          return null;
        }

        let antwoordenTeTonen = vraag.antwoorden;
        if (vraag.question_number === 6) {
          const toegestaneAntwoorden = getFilteredAntwoordenVoorVraag6();
          antwoordenTeTonen = vraag.antwoorden.filter(a => toegestaneAntwoorden.includes(a.answer_number));
        }

        return (
          <div key={vraag.question_number} className="mb-6">
            <p className="font-medium mb-2">{vraag.question_text}</p>
            {antwoordenTeTonen.map((antwoord, idx) => (
              <label key={idx} className="block mb-1">
                <input
                  type="radio"
                  name={"vraag-" + vraag.question_number}
                  value={antwoord.answer_number}
                  checked={antwoorden[vraag.question_number]?.answer_number === antwoord.answer_number}
                  onChange={() => handleChange(vraag.question_number, antwoord.answer_number, vraag.has_extra_option === 1)}
                  className="mr-2"
                />
                {antwoord.answer_text}
              </label>
            ))}
            {vraag.has_extra_option === 1 && (
              <input
                type="text"
                placeholder="Extra toelichting"
                value={antwoorden[vraag.question_number]?.answer_text || ''}
                onChange={(e) => handleExtraTextChange(vraag.question_number, e.target.value)}
                className="mt-2 p-2 border rounded w-full"
              />
            )}
          </div>
        );
      })}

      <div className="flex justify-between mt-6">
        {huidigeSectie > 0 && (
          <button
            onClick={() => setHuidigeSectie(prev => prev - 1)}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Vorige
          </button>
        )}
        {huidigeSectie < vragenlijst.length - 1 ? (
          <button
            onClick={() => setHuidigeSectie(prev => prev + 1)}
            disabled={!alleVragenIngevuld()}
            className={alleVragenIngevuld() ? "px-4 py-2 bg-blue-500 text-white rounded" : "px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed"}
          >
            Volgende
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!alleVragenIngevuld()}
            className={alleVragenIngevuld() ? "px-4 py-2 bg-green-500 text-white rounded" : "px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed"}
          >
            Verzenden
          </button>
        )}
      </div>
    </div>
  );
};

export default VragenlijstPage;
