import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-[#242424] text-white flex flex-col items-center justify-center p-4">
      <div className="flex items-center justify-center">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-24 p-6 transition-all duration-300 motion-safe:animate-[spin_20s_linear_infinite] hover:drop-shadow-[0_0_2em_#61dafb]" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold">Vite + React</h1>
      <div className="p-8">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="rounded-lg border border-transparent px-4 py-2 bg-gray-800 text-base font-medium cursor-pointer transition-colors hover:border-[#646cff]"
        >
          count is {count}
        </button>
        <p className="my-4">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  );
}

export default App;
