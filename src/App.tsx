import { useState } from 'react'
import bgImg from './assets/background.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="relative min-h-screen w-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgImg} alt="background" className="h-full w-full object-cover"/>
        </div>
        <div className="absolute top-8 right-8 w-225 max-w-[90vw] rounded-lg bg-black/20 p-6 text-white backdrop-blur-sm">
          <h2 className="mb-2 text-4xl font-medium">やぁーさ</h2>
          <p className="text-sm text-white/80">ここにポートフォリオの内容を書く</p>
        </div>
      </main>
    </>
  )
}

export default App
