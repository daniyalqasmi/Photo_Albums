"use client"
import Image from 'next/image'
import { CldUploadButton, CldImage } from 'next-cloudinary';
import { useState } from 'react';


interface uploadImage {
  event: "success";
  info: { public_id: string };

}


export default function Home() {
  // use state to change the image
  const [imageId, setImageId] = useState("lmufcrayrhyrkstfhdfa")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Upload Button */}
      <CldUploadButton uploadPreset="sh0jmelo" onUpload={(result) => {
        let res = result as uploadImage
        setImageId(res.info.public_id)

        console.log("result==>", result)
      }} />
      {/* view image */}
      <CldImage
        width="400"
        height="400"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  )
}
