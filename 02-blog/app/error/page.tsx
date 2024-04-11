import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const Error:React.FC= () => {
    return(
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
                    Welcome to <span style={{ color: "green" }}>
                        ERROR TEST PAGE
                    </span>
                </h1>
                      
            <p>Sorry, The page you are looking for can´t be found</p>

            <p>Try checking your URL</p> 
 
                <h2>
                    This is a <span style={{ color: "red" }}>404 page</span>
                </h2>
            </div>            
        </section>        
    )
}

export default Error;




