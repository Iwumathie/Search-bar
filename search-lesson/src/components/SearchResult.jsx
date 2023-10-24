import React from 'react'
import './SearchResult.css'

export default function SearchResult({result}) {
  return (
    <div className='search-result'
    onClick={(e)=> alert(`you just clicked on  ${result.name}`)}
    >
         <div>{result.name}</div>

    </div>
  )
}
