import type { Frappe } from '../components/OctagonVisualizer';

// Priorité des frappes : Macepa fermé > Macepa ouvert > Bacalhau
const PRIORITY: Record<string, number> = {
  'Macepa fermé': 3,
  'Macepa ouvert': 2,
  'Bacalhau': 1,
};

const LABELS: Record<string, string> = {
  'Tu': 'Tu',
  'Pum': 'Pum',
  'Tcha': 'Tcha',
};

/**
 * Génère dynamiquement la string de structure à partir du pattern rythmique.
 * Prend en compte la priorité des instruments en cas de frappes simultanées.
 */
export function getStructureString(pattern: Frappe[][]): string {
  const structure: string[] = [];
  for (const frappes of pattern) {
    if (!frappes || frappes.length === 0) continue;
    // Prendre la frappe avec la plus haute priorité
    const main = frappes.reduce((best, curr) => {
      if (!best) return curr;
      return PRIORITY[curr.instrument] > PRIORITY[best.instrument] ? curr : best;
    }, null as Frappe | null);
    if (main && LABELS[main.type]) {
      structure.push(LABELS[main.type]);
    }
  }
  return structure.join(' – ');
}
