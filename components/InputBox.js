import React, { useRef, useState } from 'react'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import {CameraIcon, VideoCameraIcon } from '@heroicons/react/24/solid'
import {FaceSmileIcon } from '@heroicons/react/24/outline'
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
import {uploadString, ref, getDownloadURL} from 'firebase/storage'
import {db, storage} from "../firebase"

function InputBox() {

    const {data:session} = useSession();
    const inputRef = useRef(null)
    const filePickerRef = useRef(null)
    const [imageToPost, setimageToPost] = useState(null);

    const sendPost = async(e)=>{
        e.preventDefault()

        if (!inputRef.current.value) return


         // create a collection with given name in the declared firestore
        const collectionRef = collection(db, 'posts')

        await addDoc(collectionRef,{
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp:  serverTimestamp()
        }).then(doc=>{
            if(imageToPost){
                //create a reference between storage and the file (create slot for file with given name in storage)
                const storageRef = ref(storage, `posts/${doc.id}`);

                // upload image to the slot created
                const uploadTask  = uploadString(storageRef, imageToPost, 'data_url');

                removeImage();

                // Listen for state changes, errors, and completion of the upload.
                uploadTask.on('state_changed',
                null,
                (error) => {console.error(error)}, 
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(ref(storage,`posts/${doc.id}`)).then(url =>{
                        db.collection('posts').doc(doc.id).set({
                            postImage: url
                        },{merge: true})
                    })
                }) 
        }})
    

        inputRef.current.value = "";   

    }  

    
    const addImageToPost = (e)=>{
        const reader = new FileReader();
        if (e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) =>{
            setimageToPost(readerEvent.target.result)
        }
    }

    const removeImage = ()=>{
        setimageToPost(null)
    }

    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
                <Image className='rounded-full cursor-pointer' src={session.user.image} width={40} height={40}></Image>
                <form className='flex flex-1'>
                    <input className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type={'text'} placeholder={`What's on your mind, ${session.user.name}?`} ref={inputRef}></input>
                    <button hidden type={"submit"} onClick={sendPost}></button>
                </form>
                {imageToPost && (
                    <div onClick={removeImage} className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor:pointer'>
                        <img className='h-10 object-contain' src={imageToPost} alt = ""></img>
                    </div>
                )}
            </div>
            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500 '></VideoCameraIcon>
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>
                <div onClick={()=>filePickerRef.current.click()} className='inputIcon'>
                    <CameraIcon className='h-7 text-green-400 '></CameraIcon>
                    <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
                    <input type={"file"} onChange={addImageToPost} ref={filePickerRef} hidden></input>
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