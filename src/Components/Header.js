import React from 'react'

export const Header = () => {
  return (
    <div className='p-6 gap-32 justify-evenly bg-white text-2xl flex-col shadow-2xl w-80 flex h-90 mt-5 items-center ' >
        

       
        <a href='/' className='hover:text-blue-400 hover:scale-105 transition shadow-xl p-5 rounded-2xl' >Home</a>
        <a href='/Lesson' className='hover:text-blue-400 hover:scale-105 transition shadow-xl p-5 rounded-2xl'>Lesson</a>
        <a href='/Quiz' className='hover:text-blue-400 hover:scale-105 transition shadow-xl p-5 rounded-2xl'>Quiz</a>
        <a href='/Voicescreen' className='hover:text-blue-400 hover:scale-105 transition shadow-xl p-5 rounded-2xl'>Voicescreen</a>
        <a href='/Mooddetection' className='hover:text-blue-400 hover:scale-105 transition shadow-xl p-5 rounded-2xl'>Mooddetection</a>
       







    </div>
  )
}
