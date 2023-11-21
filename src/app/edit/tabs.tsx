"use client"
import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { CldImage } from "next-cloudinary"

export function TabsDemo({src}:{src:string}) {
    return (
        <Tabs defaultValue="original" className="w-full py-4 px-5">
            <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="original">Original</TabsTrigger>
                <TabsTrigger value="oil Paint">Oil Paint</TabsTrigger>
                <TabsTrigger value="cartoonify">Cartoonify</TabsTrigger>
                <TabsTrigger value="blur">Blur</TabsTrigger>
                <TabsTrigger value="improve">Improve</TabsTrigger>
                <TabsTrigger value="grayscale">Grayscale</TabsTrigger>
            </TabsList>
            {/* Original */}
            <TabsContent value="original">
                <div className="flex gap-7 items-center justify-center py-4">
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    />
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    />
                </div>
            </TabsContent>
            {/* Blur */}
            <TabsContent value="blur">
                <div className="flex gap-7 items-center justify-center py-4">
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    />
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                        effects={[{ blur: "500"}]}
                    />
                </div>
            </TabsContent>
            {/* Improve */}
            <TabsContent value="improve">
                <div className="flex gap-7 items-center justify-center py-4">
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    />
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                        effects={[{ improve: "500"}]}
                    />
                </div>
            </TabsContent>
            {/* pixelate */}
            <TabsContent value="grayscale">
                <div className="flex gap-7 items-center justify-center py-4">
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    />
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                        effects={[{ grayscale:true}]}
                    />
                </div>
            </TabsContent>
            {/* cartoonify */}
            <TabsContent value="cartoonify">
                <div className="flex gap-7 items-center justify-center py-4">
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    />
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                        effects={[{ cartoonify:true}]}
                    />
                </div>
            </TabsContent>
            {/* Oil Paint */}
            <TabsContent value="oil Paint">
                <div className="flex gap-7 items-center justify-center py-4">
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    />
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                        effects={[{ oilPaint: true}]}
                    />
                </div>
            </TabsContent>
            
        </Tabs>
    )
}
























// import { CldImage } from 'next-cloudinary';
// import { useState } from 'react';

// const Tabs = () => {
//     const [imageId, setImageId] = useState("lmufcrayrhyrkstfhdfa")
//     return (
//         <div className="py-4 px-5">

//         </div>
//     )
// }

// export default Tabs
// // {/* view image */}
// // <CldImage
// // width="400"
// // height="400"
// // src="cgdouur9rjx7xlbtmu6m"
// // sizes="100vw"
// // alt="Description of my image"
// // effects={[{ replaceColor: "saddlebrown" }]}
// // />
