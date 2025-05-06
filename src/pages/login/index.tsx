import React from 'react'
import Heroimg from '@/lib/assests/images/hero-image.jpg'
import Image from 'next/image'
import Button from '@/lib/components/Button'
import Link from 'next/link'

const Login = () => {

    const handleLoginSubmit = () => {

    }

    return (
        <div className='grid md:grid-cols-2 w-screen p-10 place-items-center h-screen'>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <input type='text' placeholder='Name' className='border-2 w-[500px] p-2'></input>
                <input type='text' placeholder='email' className='border-2 w-[500px] p-2'></input>
                <Button title="Login" onclick={handleLoginSubmit} classes="mt-3" />
                <span> Don't have an account ? <Link href="/register"> Register here</Link> </span>
            </div>

            <div className='hidden md:flex'>
                <Image src={Heroimg} alt="hero section image" className='w-full' />
            </div>
        </div>
    )
}

export default Login