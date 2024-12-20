import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import  {ScrollTrigger} from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(()=>{
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
               
            }
        })

        clipAnimation.to('.mask-clip-path', {
            clipPath: "polygon(-2% -2%, 100% 0%, 100% 100%, 0% 100%)",
            
            duration: 9,
            width: '100%',
            height: '100%',
        })
    })
  return (
    <div id='about' className='min-h-screen min-w-screen'> 
     <div className='relative mb-8 mt-36 flex flex-col gap-5 items-center'>
         <h2 className='font-general text-xs uppercase md:text-[10px] '>Turning Concepts into Code</h2>
         <AnimatedTitle title="Learn More about My Journey as  a Developer" containerClass='mt-5 !text-[#2b2b2b] text-center'/>
        
         <div className='about-subtext'>
            <p className=''>Software Developer with 4+ months of hands-on experience, </p>
            <p className='text-gray-500'>actively seeking opportunities to contribute and grow in a dynamic engineering role. Skilled in delivering impactful projects and ready to bring value to innovative teams.</p>
         </div>
     </div>

     <div className='h-dvh w-screen mt-16' id='clip'>
        <div className='about-image mask-clip-path '>
            <img src="img/about.webp" alt="Background" 
            className='absoulte left-0 top-0 size-full object-cover'/>
        </div>
     </div>
    </div>
  )
}

export default About