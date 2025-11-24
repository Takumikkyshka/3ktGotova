import React, { useState, useEffect } from 'react'

export default function Kt5Page() {
  const [facts, setFacts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [displayCount, setDisplayCount] = useState(6)

  useEffect(() => {
    loadFacts()
  }, [])

  const loadFacts = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('https://catfact.ninja/facts?limit=50')
      const data = await response.json()
      setFacts(data.data)
    } catch (err) {
      setError('Ошибка загрузки')
    } finally {
      setLoading(false)
    }
  }

  const filtered = facts.filter(f => f.fact.toLowerCase().includes(search.toLowerCase()))
  const displayed = filtered.slice(0, displayCount)

  const showMore = () => {
    setDisplayCount(prev => prev + 6)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Факты о кошках</h1>
      
      <input type="text" placeholder="Поиск..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full px-4 py-2 border rounded mb-4" />

      {loading && <div>Загрузка...</div>}
      {error && <div className="text-red-500">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {displayed.map((fact, i) => (
          <div key={i} className="border rounded p-4">
            <p>{fact.fact}</p>
          </div>
        ))}
      </div>

      {displayed.length < filtered.length && (
        <button onClick={showMore} className="px-4 py-2 bg-blue-500 text-white rounded"> Показать ещё </button>
      )}
    </div>
  )
}

