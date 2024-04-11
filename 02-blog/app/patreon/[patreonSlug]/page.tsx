import React from 'react'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'


interface propsType {
    patreonSlug: string;
}
const PatreonSlug: React.FC<{ params:propsType }> = ({ params }) => {
    
    return(
        <>
        <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
            <div className="flex justify-between font-poppins">
                <Link href={"/"} className="flex flex-row gap-1 place-items-center hover:text-amber-700 transition duration-150">
                    <ArrowLeftIcon width={20} />
                    <p>Back to Home</p>
                </Link>               
            </div>

            <br></br>

            <div className="article text-center flex flex-col">
                <h1>
                    These are our <span style={{ color: "green" }}>
                        DINAMIC PATREONS
                    </span>
                </h1>
                      
           
            </div>            
        </section>      

            <div className="article">
                <h1>Dinamic Patreon: </h1>
                <h2 className="text-center">{params.patreonSlug}</h2>

            </div>
        </>
    )
    
}


export default PatreonSlug;