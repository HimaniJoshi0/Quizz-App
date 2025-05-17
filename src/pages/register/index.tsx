import React from 'react'
import Heroimg from '@/lib/assests/images/hero-image.jpg'
import Image from 'next/image'
import Button from '@/lib/components/Button'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { apiRequest } from '@/lib/api'
import { CommonResponse } from '@/lib/types'
import Input from '@/lib/components/Input'

// Define the schema using yup
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
})

interface RegisterForm {
    name: string
    email: string
    password: string
    confirmPassword: string
}

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>({
        resolver: yupResolver(schema),
    })

    const handleRegisterSubmit = async (data: RegisterForm) => {
        console.log('Form Data:', data)
        try {
            const response = await apiRequest<CommonResponse, RegisterForm>({
                method: 'POST',
                path: '/user/register',
                data: data,
            })
            console.log('API Response:', response)
        } catch (err) {
            console.error('Error:', err)
        }
    }

    return (
        <div
            className="grid md:grid-cols-2 w-screen place-items-center h-screen"
            style={{
                backgroundImage:
                    'linear-gradient(90deg, #70ACD4, #9BBCEE, #A8CAE8, #4882E6, #245595, #70ACD4)',
            }}
        >

               <div className='h-full w-full px-4 md:px-10 flex flex-col flex-1'>
                <Link href="/">Home</Link>
            <div className="flex flex-col gap-4 justify-center items-center h-full w-full">
                <form
                    onSubmit={handleSubmit(handleRegisterSubmit)}
                    className="flex flex-col gap-4 w-full px-4 md:px-10"
                >

                    <Input label="Email" validations={register('email')} error={!!errors.email} helperText={errors?.email?.message || ""} />
                    <Input label="Password" validations={register('password')} error={!!errors.password} helperText={errors?.password?.message || ""} />
                    <Input label="Confirm Password" validations={register('confirmPassword')} error={!!errors.confirmPassword} helperText={errors?.confirmPassword?.message || ""} />


                    <Button
                        title="Register"
                        onclick={handleSubmit(handleRegisterSubmit)}
                        classes="mt-3 bg-gray-700 border-2 border-white p-2 rounded-md"
                        variant="contained"
                        type="submit"
                    />

                </form>
                <span>
                    Already have an account?{' '}
                    <Link href="/login">Login here</Link>
                </span>
            </div>
               </div>
            <div className="hidden md:flex h-screen">
                <Image
                    src={Heroimg}
                    alt="hero section image"
                    className="w-full h-full object-cover object-left"
                />
            </div>
        </div>
    )
}

export default Register