import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

export default function Register() {
    const router = useRouter()

    const handleToLogin = (e) => {
        router.push('/')
    }

    return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Sukses registrasi page" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-indigo-900">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <div className="flex items-center justify-center mb-6">
                <Image src="/Logo_djp.png" alt="DJP Logo" width={50} height={50} className="mr-3" />
                <h2 className="text-2xl font-semibold text-center text-yellow-400">Sukses</h2>
            </div>
            <button className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition" onClick={handleToLogin}>
              Login
            </button>
        </div>
      </div>
    </>
  )
}
