import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Metrics from './components/Metrics'
import GarminStack from './components/GarminStack'
import Roadmap from './components/Roadmap'
import Pricing from './components/Pricing'
import TechStack from './components/TechStack'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0a0f1e', color: '#f1f5f9' }}>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Metrics />
        <GarminStack />
        <Roadmap />
        <Pricing />
        <TechStack />
      </main>
      <Footer />
    </div>
  )
}

export default App
