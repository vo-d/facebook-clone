import React, { useRef } from 'react'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import {CameraIcon, VideoCameraIcon } from '@heroicons/react/24/solid'
import {FaceSmileIcon } from '@heroicons/react/24/outline'
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
import {db} from "../firebase"

function InputBox() {
    const {data:session} = useSession();
    const inputRef = useRef(null)
    const sendPost = async(e)=>{
        e.preventDefault()

        if (!inputRef.current.value) return

        await addDoc(collection(db, "posts"),{
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp:  serverTimestamp()
        })

        inputRef.current.value = "";   
    }
    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
                <Image className='rounded-full cursor-pointer' src={session.user.image} width={40} height={40}></Image>
                <form className='flex flex-1'>
                    <input className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type={'text'} placeholder={`What's on your mind, ${session.user.name}?`} ref={inputRef}></input>
                    <button hidden type={"submit"} onClick={sendPost}></button>
                </form>
            </div>
            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500 '></VideoCameraIcon>
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>
                <div className='inputIcon'>
                    <CameraIcon className='h-7 text-green-400 '></CameraIcon>
                    <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
                </div>
                <div className='inputIcon'>
                    <FaceSmileIcon className='h-7 text-yellow-300 '></FaceSmileIcon>
                    <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
                </div>
                
            </div>
        </div>
    )
}

export default InputBox