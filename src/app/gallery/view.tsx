"use client"

import { CldImage } from "next-cloudinary"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { TbPhotoEdit } from "react-icons/tb"
import { AddTags } from "./action"
import { useState } from "react"
import Link from "next/link"
import Album_dialog from "./album_dialog"


const View = ({ src, tag }: { src: string, tag: string[] }) => {
    const [fav, setfav] = useState(tag.includes("favourite"))

    return (
        <>
            <div className="relative ">
                {/* view image */}
                <CldImage
                    className="rounded-sm"
                    width="400"
                    height="400"
                    src={src}
                    sizes="100vw"
                    alt="Description of my image"
                />
                {/* Heart Icon for favourite */}
                <div className="absolute top-1 right-1"
                    onClick={() => {
                        setfav(!fav);
                        AddTags(src, fav);

                    }}
                >
                    {
                        fav ? (<AiFillHeart className="w-8 h-8 cursor-pointer text-red-500" />) : (<AiOutlineHeart className="w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300" />)
                    }


                </div>
                {/* Edit Icon for Editing page */}
                <div className="absolute top-1 left-1">
                    <Link href={`/edit?publicId=${src}`}>
                        <TbPhotoEdit className="w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300" />
                    </Link>
                </div>
                {/* Add to Album */}
                <div className="absolute bottom-1 left-1">
                    <Album_dialog imageData={src}/>
                </div>
                
            </div>


        </>
    )
}

export default View