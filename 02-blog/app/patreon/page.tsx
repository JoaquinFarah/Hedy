"use client"
import React from 'react'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { useFetch } from "@/app/useFetch";


export function Patreons() {
  const {data} = useFetch("https://jsonplaceholder.typicode.com/users")

    return (  
        <>
        <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
            <div className="flex justify-between font-poppins">
                <Link href={"/"} className="flex flex-row gap-1 place-items-center hover:text-amber-700 transition duration-150">
                    <ArrowLeftIcon width={20} />
                    <p>Back to Home</p>
                </Link> 
            </div>
                
            <div>          
                <div className="flex flex-col gap-2.5 font-poppins text-lg">
                    <h1 className="font-cormorantGaramond font-light text-4xl text-neutral-900 text-center">OUR BELOVED PATREONS</h1>            
                    <ul className="flex flex-col text-center gap-2 my-2">                
                        {data?.map((user) => (<li className="p-2" key={user.id}> + {user.name}, "{user.username}".
                        <br></br> 
                        From: {user.address.city}</li>))}                
                    </ul>
                </div>
            </div>   
        </section>  
        </>  
            
    )
  }
  
  export default Patreons;



