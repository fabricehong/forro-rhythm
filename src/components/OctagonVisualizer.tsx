import React from 'react';

interface Frappe {
  type: 'Tu' | 'Pum' | 'Tcha';
  instrument: string;
}

interface OctagonVisualizerProps {
  rythme: string;
  currentStep?: number | null;
  showLegend?: boolean;
}

// Structure de données corrigée pour chaque rythme (ordre : 1, i, &, a, 2, i, &, a)
export const rythmesData: Record<string, Frappe[][]> = {
  'Xote': [
    [{ type: 'Tu', instrument: 'Macepa fermé' }], // 1
    [],                                           // i
    [{ type: 'Tcha', instrument: 'Bacalhau' }],   // &
    [],                                           // a
    [{ type: 'Pum', instrument: 'Macepa ouvert' }], // 2
    [],                                           // i
    [
      { type: 'Pum', instrument: 'Macepa ouvert' },
      { type: 'Tcha', instrument: 'Bacalhau' }
    ], // & (frappes simultanées)
    []                                            // a
  ],
  'Baião': [
    [{ type: 'Tu', instrument: 'Macepa fermé' }], // 1
    [],                                           // i
    [{ type: 'Tcha', instrument: 'Bacalhau' }],   // &
    [{ type: 'Pum', instrument: 'Macepa ouvert' }], // a (syncope basse)
    [],                                           // 2 (repos)
    [],                                           // i
    [{ type: 'Tcha', instrument: 'Bacalhau' }],   // &
    []                                            // a
  ],
  'Forró/Rojão': [
    [{ type: 'Pum', instrument: 'Macepa ouvert' }], // 1
    [],                                             // i
    [],                                             // & (silence)
    [{ type: 'Tu', instrument: 'Macepa fermé' }],   // a (syncope haute)
    [{ type: 'Tcha', instrument: 'Bacalhau' }],     // 2 (aigu)
    [],                                             // i
    [{ type: 'Tcha', instrument: 'Bacalhau' }],     // &
    [{ type: 'Pum', instrument: 'Macepa ouvert' }], // a (syncope basse)
  ],
  'Xaxado': [
    [{ type: 'Tu', instrument: 'Macepa fermé' }],   // 1
    [{ type: 'Tcha', instrument: 'Bacalhau' }],     // i (syncope aiguë)
    [],                                             // & (silence)
    [{ type: 'Tu', instrument: 'Macepa fermé' }],   // a (syncope haute)
    [{ type: 'Tcha', instrument: 'Bacalhau' }],     // 2 (aigu)
    [],                                             // i
    [{ type: 'Pum', instrument: 'Macepa ouvert' }], // & (grave)
    []                                              // a
  ],
  'Arrastapé': [
    [{ type: 'Tu', instrument: 'Macepa fermé' }],   // 1
    [],                                             // i
    [{ type: 'Tcha', instrument: 'Bacalhau' }],     // & (aigu)
    [],                                             // a
    [{ type: 'Pum', instrument: 'Macepa ouvert' }], // 2
    [],                                             // i
    [
      { type: 'Pum', instrument: 'Macepa ouvert' },
      { type: 'Tcha', instrument: 'Bacalhau' }
    ], // & (frappes simultanées)
    []                                              // a
  ],
};

// Couleurs pour chaque frappe (contour)
const colors: Record<string, string> = {
  'Tu': '#7B2D06',      // Macepa fermé (brun foncé)
  'Pum': '#B97A2A',     // Macepa ouvert (brun clair)
  'Tcha': '#3B82F6',    // Bacalhau (bleu)
};

// Légende instruments (cercles contours)
const legendInstruments = [
  { label: 'Macepa fermé (Tu)', color: colors['Tu'], r: 13, strokeWidth: 5, fill: 'none' },
  { label: 'Macepa ouvert (Pum)', color: colors['Pum'], r: 13, strokeWidth: 5, fill: 'none' },
  { label: 'Bacalhau (Tcha)', color: colors['Tcha'], r: 13, strokeWidth: 4, fill: 'none' },
];

// Légende beats (cercles pleins)
const legendBeats = [
  { label: 'Beat (temps fort)', color: '#6C63FF', r: 12, fill: true },
  { label: 'Off-beat (&)', color: '#4CAF50', r: 9, fill: true },
];

// Labels des subdivisions (ordre horaire)
const labels = ['1', 'i', '&', 'a', '2', 'i', '&', 'a'];

// Configuration centralisée pour la visualisation
const visualConfig = {
  Tu: { color: colors['Tu'], r: 20, strokeWidth: 3 },
  Pum: { color: colors['Pum'], r: 20, strokeWidth: 3 },
  Tcha: { color: colors['Tcha'], r: 21, strokeWidth: 3 },
  beat: {
    0: { color: '#6C63FF', r: 16 }, // Beat 1
    2: { color: '#4CAF50', r: 13 }, // &
    4: { color: '#6C63FF', r: 16 }, // Beat 2
    6: { color: '#4CAF50', r: 13 }, // &
  }
};

// Calcul des coordonnées des 8 sommets de l'octogone
const getOctagonPoints = (cx: number, cy: number, r: number) => {
  const points = [];
  for (let i = 0; i < 8; i++) {
    const angle = (Math.PI / 4) * i - Math.PI / 2; // commence en haut
    points.push({
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    });
  }
  return points;
};

const OctagonVisualizer: React.FC<OctagonVisualizerProps> = ({ rythme, currentStep, showLegend = true }) => {
  const points = getOctagonPoints(150, 150, 100);
  const frappes = rythmesData[rythme] || Array(8).fill([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0' }}>
      <svg width="320" height="320" viewBox="0 0 320 320">
        {/* Octogone */}
        <polygon
          points={points.map(p => `${p.x},${p.y}`).join(' ')}
          fill="#f8f8f8" stroke="#888" strokeWidth="2"
        />
        {/* Surbrillance de la subdivision active */}
        {typeof currentStep === 'number' && (
          <circle
            cx={points[currentStep].x}
            cy={points[currentStep].y}
            r={38}
            fill="none"
            stroke="#FFD700"
            strokeWidth={5}
            opacity={0.7}
          />
        )}
        {/* Beats (sous les instruments) */}
        {points.map((p, i) =>
          visualConfig.beat[i as keyof typeof visualConfig.beat] ? (
            <circle
              key={"beat-" + i}
              cx={p.x}
              cy={p.y}
              r={visualConfig.beat[i as keyof typeof visualConfig.beat].r}
              fill={visualConfig.beat[i as keyof typeof visualConfig.beat].color}
              stroke="#fff"
              strokeWidth={2}
              style={{ zIndex: 1 }}
            />
          ) : null
        )}
        {/* Instruments (cercles contours, plus grands que les beats) */}
        {points.map((p, i) =>
          frappes[i] && frappes[i].length > 0 ? (
            frappes[i].map((f, j) => (
              <circle
                key={i + '-' + f.type}
                cx={p.x}
                cy={p.y}
                r={visualConfig[f.type].r - j * 6}
                fill="none"
                stroke={visualConfig[f.type].color}
                strokeWidth={visualConfig[f.type].strokeWidth}
                style={{ zIndex: 2 + j, background: 'white' }}
              />
            ))
          ) : null
        )}
        {/* Labels des subdivisions */}
        {points.map((p, i) => (
          <text
            key={"label" + i}
            x={p.x}
            y={p.y + 6}
            textAnchor="middle"
            fontSize={18}
            fill="#333"
            fontWeight="bold"
            style={{ pointerEvents: 'none' }}
          >{labels[i]}</text>
        ))}
      </svg>
      {/* Légende instruments */}
      {showLegend && (
        <>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', alignItems: 'center' }}>
            {legendInstruments.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width={32} height={32}>
                  <circle
                    cx={16}
                    cy={16}
                    r={item.r}
                    fill={item.fill}
                    stroke={item.color}
                    strokeWidth={item.strokeWidth}
                  />
                </svg>
                <span style={{ fontSize: 15 }}>{item.label}</span>
              </div>
            ))}
          </div>
          {/* Légende beats */}
          <div style={{ display: 'flex', gap: '2rem', marginTop: '0.5rem', alignItems: 'center' }}>
            {legendBeats.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width={32} height={32}>
                  <circle
                    cx={16}
                    cy={16}
                    r={item.r}
                    fill={item.fill ? item.color : 'none'}
                    stroke={item.fill ? item.color : '#888'}
                    strokeWidth={item.fill ? 2 : 4}
                  />
                </svg>
                <span style={{ fontSize: 15 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default OctagonVisualizer; 