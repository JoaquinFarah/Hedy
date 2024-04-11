import ArticleItemList from "@/components/ArticleListItem"
import { getCategorizedArticles } from "@/lib/articles"
import Link from "next/link"


const HomePage = () => {
  const articles = getCategorizedArticles()

  // console.log(articles)
  return(
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <header className="font-cormorantGaramond font-light text-6xl text-neutral-900 text-center">
        <h1>Boring Blog</h1>
        
        <h3><Link href={"patreon"} className="font-cormorantGaramond text-3xl tracking-tight hover:text-amber-700 transition duration-150">Our Dinamic Patreons</Link></h3>
       
        <br></br>
        <p className="article">Keeping in mind what you´ve said Tomas. I´ve made this blog with one goal: 
        <br></br>To be considered a blog from the past century XD 
        <br></br>
        <br></br>
        Aside jokes, the main idea of this blog is to be minimal and informative, to keep the user focus just in one thing, the information. Is not ment to be pretty or 
        overcharged with colour schemes, just simple and clear, where you can find information of your interest fast and eficiently. 
        
        {/* Design part of my next personal project: 
        
        <Link href="https://wahapedia.ru/wh40k10ed/factions/space-marines/" className="text-neutral-900 hover:text-amber-700 transition duration-150">Wahapedia, Warhammer 40k library</Link>  
         */}
        </p>
      </header>
      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        
        {articles !== null && 
        Object.keys(articles).map((article) => (
          <ArticleItemList category={article} articles={articles[article]} key={article}/>
        
        ))}
        
      </section>
    </section>
  )
}

export default HomePage