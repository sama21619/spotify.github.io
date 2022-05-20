
import React, { useContext } from 'react'
import { Songs } from '../Context'
export default function DetailSong(){
    const {song} = useContext(Songs)
    return (
        <div className="col-span-1 p-3">
             <h2 className='text-cyan-500 font-bold'>Now playing</h2>
            <h2 className='text-neutral-400 text-2xl'>{song.name}</h2>
            <div className='w-[240px] m-auto mt-10'>
                <img className='lg:w-full md:w-full sm:w-[200px] xs:w-[150px]' src={song.links.images[0].url} alt='avatar' />
            </div>
            <div className='flex justify-evenly items-center mt-10'>
            <img className='lg:w-[70px] md:w-[70px] sm:w-[50px] xs:w-[30px] rounded-full' src={song.links.images[1].url} alt='rounded-avatar' />
            <span className='text-xl text-white'>{song.author}</span>
            </div>

        </div>
    )
}