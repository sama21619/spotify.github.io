
import React, { useContext } from 'react'
import { Songs } from '../Context'
export default function DetailSong(){
    const {song} = useContext(Songs)
    return (
        <div className="col-span-1 p-3">
             <h2 className='text-cyan-500 font-bold'>Now playing</h2>
            <h2 className='text-neutral-400 text-2xl'>{song.name}</h2>
            <div className='w-[240px] m-auto mt-10'>
                <img className='w-full' src={song.links.images[0].url} alt='avatar' />
            </div>
            <div className='flex justify-evenly items-center mt-10'>
            <img className='w-[70px] rounded-full' src='https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/269967632_3226490621009922_1066982041896637066_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=174925&_nc_ohc=8IF9CpaXymoAX-r773v&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT_rANvpHEHgIJ3uuX5ADC6QO7lrn-pNZ00SUx8BI9_miw&oe=627DE06D' alt='avatar' />
            <span className='text-xl text-white'>{song.author}</span>
            </div>

        </div>
    )
}