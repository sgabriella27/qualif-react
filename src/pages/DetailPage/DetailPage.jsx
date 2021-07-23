import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Heart from '../../components/Heart'
import './DetailPage.css'

export default function DetailPage() {
    let {id} = useParams()
    const [songs, setSongs] = useState([])

    const [image, setImage] = useState([])
    const artistName = 'Coldplay'

    useEffect(() => {
        fetch(`https://spotify-rest.up.railway.app/album?id=${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setSongs(data.data)
        })
        fetch( `https://spotify-rest.up.railway.app/artist?query=${encodeURI(artistName)}`)
        .then(res => res.json())
        .then(data => {
            setImage(data.data.albums.filter(a => a.id === id)[0].image)
        })
    }, [])

    return (
        <div className="min-h-screen bg-blue-100 pt-6 flex-col items-center pb-6 ">
            <div className="min-w-screen flex justify-center">
                <img src={image} alt="" className="rounded-md w-60 h-60"/>
            </div>
            {
                songs?.map(song => {
                    return (
                        <div className="song-container items-center mx-auto flex justify-around min-h-24 max-w-xl rounded-md mt-6 py-2 shadow">
                            <div className="flex flex-col justify-center">
                                <h3 className="ml-6">{song.name}</h3>
                                <audio src={song.preview_url} controls/>
                            </div>
                            <Heart song={song}/>
                        </div>
                    )
                })
            }
        </div>
    )
}