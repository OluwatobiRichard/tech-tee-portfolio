import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import './index.css'
import './App.css'
import { useState } from 'react'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete= {() => setIsLoaded(true)}/>} {""}
      <div 
      className={`min-h-screen transaction-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
      >
        <Navbar />
      </div>
    </>
  )
};

export default App
