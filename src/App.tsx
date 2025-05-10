import { useState, useCallback } from 'react'
import Header from './components/Header'
import RhythmSelector from './components/RhythmSelector'
import OctagonVisualizer from './components/OctagonVisualizer'
import PlaybackControls from './components/PlaybackControls'
import RhythmExplanation from './components/RhythmExplanation'
import './App.css'
import { useRythmicPlayer } from './hooks/useRythmicPlayer'
import type { Frappe } from './hooks/useRythmicPlayer'

// Importation de la structure des frappes depuis OctagonVisualizer
import { rythmesData } from './components/OctagonVisualizer'

function App() {
  const [rythme, setRythme] = useState('Xote')
  const [isPlaying, setIsPlaying] = useState(false)
  const [tempo, setTempo] = useState(100)
  const [currentStep, setCurrentStep] = useState(0)

  // Callback pour avancer le step (utilisé par le hook audio)
  const handleStep = useCallback((step: number) => {
    setCurrentStep(step)
  }, [])

  // Structure de frappes pour le rythme sélectionné
  const frappes: Frappe[][] = rythmesData[rythme] || Array(8).fill([])

  useRythmicPlayer({
    rythme: frappes,
    tempo,
    isPlaying,
    onStep: handleStep,
  })

  const handlePlayPause = () => setIsPlaying(p => !p)
  const handleStop = () => { setIsPlaying(false); setCurrentStep(0); }
  const handleTempoChange = (t: number) => setTempo(t)

  return (
    <div>
      <Header />
      <RhythmSelector selected={rythme} onChange={setRythme} />
      <OctagonVisualizer rythme={rythme} currentStep={isPlaying ? currentStep : null} />
      <PlaybackControls
        isPlaying={isPlaying}
        tempo={tempo}
        onPlayPause={handlePlayPause}
        onStop={handleStop}
        onTempoChange={handleTempoChange}
      />
      <RhythmExplanation rythme={rythme} />
    </div>
  )
}

export default App
