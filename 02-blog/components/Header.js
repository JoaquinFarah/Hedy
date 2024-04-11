import Link from "next/link"
import styles from "@/app/styles/Header.module.css"
import Image from "next/image"

const Header = () => {
  return (
    <header>        
        <div className="contenedor">
            <div className={styles.barra}>
                <Link href="/">
                    <Image width={150} height={150} src="/img/bblogo.png" alt="BoringBlog"/>               
                </Link>                                
                <nav className={styles.navegacion}>                      
                    <Link 
                    className="hover:text-amber-700 transition duration-150 gap-2"
                    href="/patreon">PATREONS
                    </Link>
                    <Link 
                    className="hover:text-amber-700 transition duration-150 gap-2"
                    href="/error">ERROR
                </Link>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header