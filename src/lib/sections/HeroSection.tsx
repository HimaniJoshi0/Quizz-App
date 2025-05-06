import Image from 'next/image'
import React from 'react'
import Heroimg from '@/lib/assests/images/hero-image.jpg'
import Button from '../components/Button'

const HeroSection = () => {

    const getstarted = () => {
        console.log("onclick")
    }

    return (
        <div className='grid md:grid-cols-2 py-18 px-10 gap-8'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-6xl font-bold'>Challenge Your Mind with AI-Powered Quizzes</h1>
                <p className='mt-3 text-gray-600'>Sharpen your skills, test your knowledge, and learn something new every day with smart, adaptive quizzes tailored just for you. Powered by AI for maximum fun and insight.</p>
                <Button classes="mt-3" title="Get Started" onclick={getstarted} />
            </div>
            <div className='w-full'>
                <Image src={Heroimg} alt="hero section image" className='w-full' />
            </div>
        </div>
    )
}

export default HeroSection