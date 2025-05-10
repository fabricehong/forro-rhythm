import { useEffect, useRef } from 'react';
import * as Tone from 'tone';

export type Frappe = {
  type: 'Tu' | 'Pum' | 'Tcha';
  instrument: string;
};

// Réglages des instruments (volume + paramètres synthé)
export const instrumentSettings = {
  Tu: {
    volume: -3,
    synth: {
      pitchDecay: 0.01,
      octaves: 2,
      envelope: { attack: 0.001, decay: 0.1, sustain: 0, release: 0.05 }
    }
  },
  Pum: {
    volume: -5,
    synth: {
      pitchDecay: 0.2,
      octaves: 1.2,
      envelope: { attack: 0.01, decay: 0.4, sustain: 0, release: 0.2 }
    }
  },
  Tcha: {
    volume: -25,
    synth: {
      noise: { type: 'white' as 'white' },
      envelope: { attack: 0.001, decay: 0.08, sustain: 0, release: 0.01 }
    }
  }
};

export function useRythmicPlayer({
  rythme, // Frappe[][]
  tempo,
  isPlaying,
  onStep,
}: {
  rythme: Frappe[][];
  tempo: number;
  isPlaying: boolean;
  onStep: (step: number) => void;
}) {
  const stepRef = useRef(0);
  const partRef = useRef<Tone.Part | null>(null);

  // Synthétiseurs et volumes pour chaque son
  const tuSynth = useRef<Tone.MembraneSynth | null>(null);
  const pumSynth = useRef<Tone.MembraneSynth | null>(null);
  const tchaSynth = useRef<Tone.NoiseSynth | null>(null);
  const tuVol = useRef<Tone.Volume | null>(null);
  const pumVol = useRef<Tone.Volume | null>(null);
  const tchaVol = useRef<Tone.Volume | null>(null);
  // Effets stéréo et réverbération
  const tuPan = useRef<Tone.Panner | null>(null);
  const pumPan = useRef<Tone.Panner | null>(null);
  const tchaPan = useRef<Tone.Panner | null>(null);
  const pumReverb = useRef<Tone.Reverb | null>(null);

  useEffect(() => {
    // Création des effets
    tuPan.current = new Tone.Panner(-0.5); // Tu à gauche
    pumPan.current = new Tone.Panner(0);   // Pum centré
    tchaPan.current = new Tone.Panner(0.5); // Tcha à droite
    pumReverb.current = new Tone.Reverb({ decay: 1.8, wet: 0.18 }); // Légère réverbération
    // Connexions
    tuVol.current = new Tone.Volume(instrumentSettings.Tu.volume).connect(tuPan.current).toDestination();
    pumVol.current = new Tone.Volume(instrumentSettings.Pum.volume).connect(pumReverb.current).connect(pumPan.current).toDestination();
    tchaVol.current = new Tone.Volume(instrumentSettings.Tcha.volume).connect(tchaPan.current).toDestination();
    tuSynth.current = new Tone.MembraneSynth(instrumentSettings.Tu.synth).connect(tuVol.current);
    pumSynth.current = new Tone.MembraneSynth(instrumentSettings.Pum.synth).connect(pumVol.current);
    tchaSynth.current = new Tone.NoiseSynth(instrumentSettings.Tcha.synth).connect(tchaVol.current);
    return () => {
      tuSynth.current?.dispose();
      pumSynth.current?.dispose();
      tchaSynth.current?.dispose();
      tuVol.current?.dispose();
      pumVol.current?.dispose();
      tchaVol.current?.dispose();
      tuPan.current?.dispose();
      pumPan.current?.dispose();
      tchaPan.current?.dispose();
      pumReverb.current?.dispose();
    };
  }, []);

  useEffect(() => {
    if (!isPlaying) {
      Tone.Transport.stop();
      Tone.Transport.cancel();
      partRef.current?.dispose();
      partRef.current = null;
      stepRef.current = 0;
      return;
    }
    // Crée la séquence
    const steps = rythme.length;
    const events = Array.from({ length: steps }, (_, i) => ({
      time: `0:0:${i}`,
      step: i,
      frappes: rythme[i],
    }));
    const part = new Tone.Part((time, value) => {
      // Joue toutes les frappes de la subdivision
      value.frappes.forEach((f: Frappe) => {
        if (f.type === 'Tu') tuSynth.current?.triggerAttackRelease('C2', '8n', time);
        if (f.type === 'Pum') pumSynth.current?.triggerAttackRelease('A1', '4n', time);
        if (f.type === 'Tcha') tchaSynth.current?.triggerAttackRelease('8n', time);
      });
      stepRef.current = value.step;
      onStep(value.step);
    }, events).start(0);
    part.loop = true;
    part.loopEnd = `0:0:${steps}`;
    partRef.current = part;
    Tone.Transport.bpm.value = tempo;
    Tone.Transport.start();
    return () => {
      Tone.Transport.stop();
      Tone.Transport.cancel();
      part.dispose();
      partRef.current = null;
    };
  }, [isPlaying, rythme, tempo, onStep]);
} 