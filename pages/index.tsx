import Head from 'next/head'
import Header from '../components/Header'
import  {GetServerSideProps} from 'next'
import {getSession} from 'next-auth/react'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'

interface Props{
  session : any
}

export default function Home({session} : Props) {
  if (!session) return <Login/>
  return (
    <div className=' h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* Header */}
      <Header/>
      <main className='flex'>
        <Sidebar/>
      </main>

    </div>
  )
}

export const getServerSideProps : GetServerSideProps = async(context) =>{
  // Get the user
  const session = await getSession(context)
  return{
    props:{
      session
    }
  }
}