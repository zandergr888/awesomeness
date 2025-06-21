import { useState } from 'react'
import './App.css'
import MemoryCard from './components/MemoryCard'
import { memories } from './data/memories'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMemories = memories.filter(memory =>
    memory.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Our Memory Scrapbook</h1>
        <p className="subtitle">February - June 2025</p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search memories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </header>
      
      <main className="main-content">
        <div className="memories-grid">
          {filteredMemories.map(memory => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>
        
        {filteredMemories.length === 0 && (
          <div className="no-results">
            <p>No memories found for "{searchTerm}"</p>
            <p>Try searching for something else!</p>
          </div>
        )}
      </main>
      
      <footer className="footer">
        <p>Hi! Thanks for being awesome. Keep being you.</p>
      </footer>
    </div>
  )
}

export default App
