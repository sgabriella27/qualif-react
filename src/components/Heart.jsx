import React, { useState, useEffect } from 'react'

export default function Heart(props) {
    const {song} = props
    let arr = JSON.parse(localStorage.getItem('favorite'))??[]
    const [favorite, setFavorite] = useState(arr.some(a => a.id === song.id))
    
    return (
        <div onClick={() => {
            setFavorite(!favorite)
            arr = JSON.parse(localStorage.getItem('favorite'))??[]
            if(favorite) {
                localStorage.setItem('favorite', JSON.stringify(arr.filter(a => a.id !== song.id)))
            }
            else {
                localStorage.setItem('favorite', JSON.stringify([...arr, song]))
            }
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-red-600 cursor-pointer ${favorite?'fill-current':'stroke-current'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        </div>
    )
}