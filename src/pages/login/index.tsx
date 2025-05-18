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
import Cookies from 'js-cookie'
import Input from '@/lib/components/Input'


// Define the schema using yup
const schema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
})

interface LoginForm {
    email: string
    password: string
}

interface LoginResponse {
    token: string
}

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        resolver: yupResolver(schema),
    })

    const handleRegisterSubmit = async (data: LoginForm) => {
        try {
            const response = await apiRequest<CommonResponse<LoginResponse>, LoginForm>({
                method: 'POST',
                path: '/user/login',
                data: data,
            })
            console.log('API Response:', response.data?.token)
            const token = response.data?.token
            if (token) {
                Cookies.set('authToken', token, { expires: 7 })
                console.log('Token stored in cookies:', token)
            }
        } catch (err) {
            console.error('Error:', err)
        }
    }

    return (
        <div className="grid md:grid-cols-2 w-screen place-items-center h-screen" style={{
            backgroundImage: 'linear-gradient(90deg, #70ACD4, #9BBCEE, #A8CAE8, #4882E6, #245595, #70ACD4)',
        }}>
            <div className='h-full w-full px-4 md:px-10 flex flex-col flex-1'>
                <Link href="/">Home</Link>
                <div className="flex flex-col gap-4 justify-center items-center h-full w-full">
                    <form
                        onSubmit={handleSubmit(handleRegisterSubmit)}
                        className="flex flex-col gap-4 w-full px-4 md:px-10"
                    >
                        <Input label="Email" validations={register('email')} error={!!errors.email} helperText={errors?.email?.message || ""} />

                        <Input label="Password" validations={register('password')} error={!!errors.password} helperText={errors?.password?.message || ""} />

                        <Button
                            title="Login"
                            onclick={handleSubmit(handleRegisterSubmit)}
                            classes="mt-3 bg-gray-700 border-2 border-white p-2 rounded-md"
                            variant="contained"
                            type="submit"
                        />
                    </form>
                    <span>
                        Don't have an account?{' '}
                        <Link href="/register">Register here</Link>
                    </span>
                </div>
            </div>
            <div className="hidden md:flex h-screen">
                <Image
                    src={Heroimg}
                    alt="auth image"
                    className="w-full h-full object-cover object-left"
                />
            </div>
        </div>
    )
}

export default Login