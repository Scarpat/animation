/* eslint-disable jsx-a11y/alt-text */
import  waveFront from '@/assets/wave.svg'
import  waveBack from '@/assets/wave-bg.svg'
import Image from 'next/image'

export default function Home (){
  return (
    <>
    <div className="bg-black w-screen h-screen flex">
      <div className="bg-white w-[20vw] h-[20vw] rounded-full m-auto absolute inset-0 overflow-hidden flex items-center justify-center">
        <div className='w-[200vw] h-screen'>
        <Image src={waveBack.src} width={waveBack.width} height={waveBack.height} className='max-w-none w-[100vw]  max-h-none relative wave-animation-2' alt={''}/>
       <div className='relative wave-animation-1 -mt-[400px]'>
        <Image src={waveFront.src} width={waveFront.width} height={waveFront.height} className='max-w-none relative h- z-10 -mb-10 w-[100vw] max-h-none ' alt={''}/>
        <div className='bg-[#0099ff] h-screen'/>
       </div>
        </div>
      </div>  
    </div>
    </>
  )
}