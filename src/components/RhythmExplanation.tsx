import React from 'react';

interface RhythmExplanationProps {
  rythme: string;
}

const explications: Record<string, { structure: string; caractere: string }> = {
  'Xote': {
    structure: 'Tu - Tcha - Pum - Tcha',
    caractere: 'Doux, balancé, accessible.'
  },
  'Baião': {
    structure: 'Tu - Tcha - Pum - Pum',
    caractere: 'Plus terrien, énergique, marche appuyée.'
  },
  'Forró/Rojão': {
    structure: 'Pum - Tcha - Pum - Tcha',
    caractere: 'Joyeux, dansant, très répandu.'
  },
  'Xaxado': {
    structure: 'Tu - Tcha - Pum - Tu',
    caractere: 'Martial, marqué, rythmique de marche rapide.'
  },
  'Arrastapé': {
    structure: 'Tu - Tcha - Tu - Tcha',
    caractere: 'Rapide, bondissant, presque cavalant.'
  },
};

const RhythmExplanation: React.FC<RhythmExplanationProps> = ({ rythme }) => {
  const exp = explications[rythme] || { structure: '', caractere: '' };
  return (
    <section style={{ maxWidth: 500, margin: '2rem auto', background: '#f4f4f4', padding: '1rem', borderRadius: 8 }}>
      <h2>Description du rythme : {rythme}</h2>
      <p><strong>Structure :</strong> {exp.structure}</p>
      <p><strong>Caractère :</strong> {exp.caractere}</p>
    </section>
  );
};

export default RhythmExplanation; 