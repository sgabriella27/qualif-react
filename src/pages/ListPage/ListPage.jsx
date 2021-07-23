import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ListPage.css'

export default function ListPage() {
    const [albums, setAlbums] = useState([])
    const [search, setSearch] = useState("")
    const artistName = 'Coldplay'

    useEffect(() => {
        fetch( `https://spotify-rest.up.railway.app/artist?query=${encodeURI(artistName)}`)
        .then(res => res.json())
        .then(data => {
            setAlbums(data.data.albums)
        })
    }, [])


    return (
        <div className="min-h-screen bg-blue-100 pt-6">
            <div className="max-w-md mx-auto flex justify-center items-center">
                <input type="text" onChange={e => setSearch(e.target.value)} placeholder="Search" className="rounded-lg h-9 w-full mr-4 focus:outline-none focus:ring-2 focus:ring-indigo-200 pl-3" />
                <Link to={`/favorite`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-600 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
                <div className="grid grid-cols-1 lg:grid-cols-4">
                    {
                        albums?.filter(a => a.name.includes(search)).map(album => {
                            return (
                                <Link to={`/detail/${album.id}`} key={album.id}>
                                    <div className="flex items-center pt-6 ml-4">
                                        <img className="rounded-full w-16 h-16 album-image" src={album.image} alt=""/>
                                        <div className="flex-col justify-center ml-3">
                                            <h6 className="text-sm font-semibold">{album.name}</h6>
                                            <span className="text-xs">{artistName}</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
    )

}