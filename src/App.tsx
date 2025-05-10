import { useState, useEffect } from 'react'
import Header from './components/Header'
import RhythmSelector from './components/RhythmSelector'
import OctagonVisualizer from './components/OctagonVisualizer'
import PlaybackControls from './components/PlaybackControls'
import RhythmExplanation from './components/RhythmExplanation'
import './App.css'

function App() {
  const [rythme, setRythme] = useState('Xote')
  const [isPlaying, setIsPlaying] = useState(false)
  const [tempo, setTempo] = useState(100)
  const [currentStep, setCurrentStep] = useState(0)

  // Avance la progression rythmique quand isPlaying est actif
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 8)
    }, 60000 / (tempo * 2)); // 8 subdivisions par mesure, tempo = noires
    return () => clearInterval(interval)
  }, [isPlaying, tempo])

  // Remise à zéro du step quand on change de rythme ou qu'on stoppe
  useEffect(() => {
    setCurrentStep(0)
  }, [rythme, isPlaying])

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
