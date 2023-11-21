"use client"

import { CldImage } from "next-cloudinary"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { AddTags } from "../gallery/action"
import { useState } from "react"
import Link from "next/link"
import { TbPhotoEdit } from "react-icons/tb"
import { BiBookAdd } from "react-icons/bi"




const View = ({ src, tag, fun }: { src: string, tag: string[], fun: any }) => {
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

                <div className="absolute top-1 right-1"
                    onClick={() => {
                        fun(src);
                        setfav(!fav);
                        AddTags(src, fav);

                    }}
                >
                    {
                        fav ? (<AiFillHeart className="w-8 h-8 cursor-pointer text-red-500" />) : (<AiOutlineHeart className="w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300" />)
                    }

                    {/* <AiFillHeart className="w-8 h-8 cursor-pointer text-red-500"/> */}
                </div>
                {/* Edit Icon for Editing page */}
                <div className="absolute top-1 left-1">
                    <Link href={`/edit?publicId=${src}`}>
                        <TbPhotoEdit className="w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300" />
                    </Link>
                </div>
                
            </div>

        </>
    )
}

export default View