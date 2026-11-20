import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <h1>Sklepik szkolny</h1>
        <div id="przedmioty">
          <p>Notes - 12.50zł</p>
          <p>Długopis - 3.20zł</p>
          <p>Plecak - 89.00zł</p>
          <p>Kalkulator - 45.90zł</p>
          <p>Zakreślacz - 4.75zł</p>
        </div>
        <div id="przyciski">
          <p><button>Do koszyka</button></p>
          <p><button>Do koszyka</button></p>
          <p><button>Do koszyka</button></p>
          <p><button>Do koszyka</button></p>
          <p><button>Do koszyka</button></p>
        </div>
      </section>
      <section id="kosz">
        <h1>Koszyk (0 pozycje)</h1>
        <div id="Info">Koszyk jest pusty</div>
      </section>
    </>
  )
}

export default App
