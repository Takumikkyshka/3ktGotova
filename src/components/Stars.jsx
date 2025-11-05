import React from 'react'

export default function Stars({ rating }) {

  const fillPercentage = (rating / 5) * 100;
    
  return (
    <div className="relative inline-flex text-2xl">
        
      <div className="flex text-gray-300">
        {
        [...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))
        }
      </div>
      
      <div className="absolute top-0 left-0 overflow-hidden flex text-yellow-400" style={{ width: `${fillPercentage}%` }}>
        {
          [...Array(5)].map((_, i) => (
            <span key={i}>★</span>
          ))
        }
      </div>
    </div>
  )
}
