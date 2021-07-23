import React, { useState, useEffect } from 'react'

export default function FavoritePage() {

    const favoriteSongs = JSON.parse(localStorage.getItem('favorite'))??[]
    console.log(favoriteSongs)

    return (
        <div className="min-h-screen bg-blue-100 pt-6 flex-col items-center pb-6">
        <h1 className="text-5xl flex justify-center pb-6 pt-3">Favorites</h1>
            {
                favoriteSongs?.map(favorite => {
                    return (
                        <div>
                            <div className="song-container items-center mx-auto flex justify-around min-h-24 max-w-xl rounded-md mt-6 py-2 shadow">
                                <div className="flex flex-col justify-center">
                                    <h3 className="ml-6">{favorite.name}</h3>
                                    <audio src={favorite.preview_url} controls/>
                                </div>
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}