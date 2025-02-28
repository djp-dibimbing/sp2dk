import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

export default function Register() {
    //const [sp2dktoken, setSp2dktoken] = useState("")
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        nik: '',
        username: '',
        password: '',
        npwp: '',
        gender: '',
    })

    const router = useRouter()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then((res) => {
            if (res.ok)
                router.push('/suksesregister')
            else
                console.error('Registration failed')
        })
  
   }

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="User registration page" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-indigo-900">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex items-center justify-center mb-6">
            <Image src="/Logo_djp.png" alt="DJP Logo" width={50} height={50} className="mr-3" />
            <h2 className="text-2xl font-semibold text-center text-yellow-400">Register</h2>
          </div>
          <form onSubmit={handleSubmit}>
            {['FirstName', 'LastName', 'Email', 'Username', 'Password', 'NIK', 'NPWP'].map((field, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-medium text-gray-700">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
                <input
                  type={field.toLowerCase() === 'password' ? 'password' : 'text'}
                  name={field.toLowerCase()}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  placeholder={`Enter your ${field}`}
                  value={formData[field.toLowerCase()]}
                  onChange={handleChange}
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
              <select
                name="gender"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="male">Laki - Laki</option>
                <option value="female">Perempuan</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
