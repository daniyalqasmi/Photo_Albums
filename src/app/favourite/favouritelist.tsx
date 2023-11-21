"use client"
import React, { useEffect, useState } from 'react'
import { MyImage } from './page'
import View from './view'

const Favouritelist = ({resource}:{resource:MyImage[]}) => {
    const [initialState, setinitialstate] = useState(resource)
    useEffect(()=>{
        setinitialstate(resource)
    },[resource])
    return (
        <div>
            <div className="columns-4 gap-4 space-y-4 mx-auto p-5">
                {initialState.map((items, i) => {
                    return (
                        <div key={i} className="break-inside-avoid">
                            <View src={items.public_id} tag={items.tags} fun={(publicId:string)=>{
                                setinitialstate((current)=>current.filter((val)=> val.public_id !== publicId))
                            }} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Favouritelist