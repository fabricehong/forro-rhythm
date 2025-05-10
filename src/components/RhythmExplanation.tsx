import React from 'react';

interface RhythmExplanationProps {
  rythme: string;
}

import { getStructureString } from '../utils/structureString';
import { rythmesData } from './OctagonVisualizer';

const explications: Record<string, { caractere: string }> = {
  'Xote': {
    caractere: 'Doux, balancé, accessible.'
  },
  'Baião': {
    caractere: 'Plus terrien, énergique, marche appuyée.'
  },
  'Forró/Rojão': {
    caractere: 'Joyeux, dansant, très répandu.'
  },
  'Xaxado': {
    caractere: 'Martial, marqué, rythmique de marche rapide.'
  },
  'Arrastapé': {
    caractere: 'Rapide, bondissant, presque cavalant.'
  },
};

const RhythmExplanation: React.FC<RhythmExplanationProps> = ({ rythme }) => {
  const exp = explications[rythme] || { caractere: '' };
  const pattern = rythmesData[rythme] || [];
  const structure = getStructureString(pattern);
  return (
    <section style={{ maxWidth: 500, margin: '2rem auto', background: '#f4f4f4', padding: '1rem', borderRadius: 8 }}>
      <h2>Description du rythme : {rythme}</h2>
      <p><strong>Structure :</strong> {structure}</p>
      <p><strong>Caractère :</strong> {exp.caractere}</p>
    </section>
  );
};

export default RhythmExplanation; 