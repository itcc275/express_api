import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [notes, setNotes] = useState(sessionStorage.getItem('notes') ? JSON.parse(sessionStorage.getItem('notes')) : [])
  const [newNote, setNewNote] = useState('')

  return (
    <>
      <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, background: '#f9f9f9', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 16 }}>Notes</h2>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <input
            onChange={(e) => setNewNote(e.target.value)}
            value={newNote}
            type="text"
            placeholder="Add a note"
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: 4,
              border: '1px solid #ccc',
              fontSize: 16
            }}
          />
          <button
            onClick={() => {
              setNotes([...notes, newNote])
              sessionStorage.setItem('notes', JSON.stringify([...notes, newNote]))
              localStorage.setItem('notes', JSON.stringify([...notes, newNote]))
              document.cookie = `notes=${JSON.stringify([...notes, newNote])}; path=/; max-age=31536000`
              // Cannot set HttpOnly cookies from client-side JavaScript.
              // HttpOnly cookies must be set from the server via the Set-Cookie HTTP header.
              setNewNote('')
            }}
            style={{
              padding: '8px 16px',
              borderRadius: 4,
              border: 'none',
              background: '#007bff',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Add
          </button>
        </div>
        <div>
          {notes.map((note, index) => (
            <div
              key={index}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <div
                style={{
                  background: '#fff',
                  padding: '8px 12px',
                  borderRadius: 4,
                  marginBottom: 8,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                }}
              >
                {note}
              </div>
              <button
                onClick={() => {
                  setNotes(notes.filter((_, i) => i !== index))
                  sessionStorage.setItem('notes', JSON.stringify(notes.filter((_, i) => i !== index)))
                  localStorage.setItem('notes', JSON.stringify(notes.filter((_, i) => i !== index)))
                  document.cookie = `notes=${JSON.stringify(notes.filter((_, i) => i !== index))}; path=/; max-age=31536000`
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          fetch('/api/logout', { method: 'POST' })
            .then(() => {
              sessionStorage.clear();
              localStorage.clear();
              document.cookie = "notes=; path=/; max-age=0";
              // window.location.reload();
            });
        }}
      >Logout</button>

    </>
  )
}

export default App
