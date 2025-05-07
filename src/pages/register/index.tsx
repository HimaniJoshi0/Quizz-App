import React from 'react'
import Heroimg from '@/lib/assests/images/hero-image.jpg'
import Image from 'next/image'
import Button from '@/lib/components/Button'
import Link from 'next/link'

const Login = () => {

    const handleLoginSubmit = () => {

    }

    return (
        <div className='grid md:grid-cols-2 w-screen  place-items-center h-screen' style={{ backgroundImage: 'linear-gradient(90deg, #70ACD4, #9BBCEE, #A8CAE8, #4882E6, #245595, #70ACD4)' }}>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <input type='text' placeholder='Name' className=' w-[500px] p-2 bg-white/70'></input>
                <input type='text' placeholder='email' className=' w-[500px] p-2 bg-white/70'></input>
                <Button title="Register" onclick={handleLoginSubmit} classes="mt-3 bg-gray-700 border-2 border-white p-2 rounded-md" />
                <span> Already have an account ? <Link href="/login"> Login here</Link> </span>
            </div>

            <div className='hidden md:flex h-screen'>
                <Image src={Heroimg} alt="hero section image" className='w-full h-full' />
            </div>
        </div>
    )
}

export default Login