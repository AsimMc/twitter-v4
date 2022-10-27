import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import News from "./News";
import { AnimatePresence, motion } from "framer-motion"; 
import dynamic from 'next/dynamic'


export default function Widgets({newsResults}) {
  const[articleNum, setArticleNum] = useState(3);
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
        <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
            <div className="flex items-center p-3 rounded-full bg-red-300 relative">
                <SearchIcon className="h-5 z-50 text-gray-500 "/>
                <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100" type="text" placeholder="Search RUbars" />
            </div>
        </div>

        <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
            <h4 className="font-bold text-xl px-4">Whats happening</h4>
        <AnimatePresence>
        {newsResults.slice(0,articleNum).map((article)=>(
          <motion.div key={article.title} initial={{opacity: 0 }} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
           <News key={article.title} article={article}/>
           </motion.div>
        ))}
        </AnimatePresence>
        <button onClick={()=>setArticleNum(articleNum + 3)} className="text-rose-300 pl-4 pb-3 hover:text-rose-400">Show more</button>
        </div>
        <div className="text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]">
          <h4 className="font-bold text-xl px-4">Capacity</h4>
          <div class="container">
            <div class="circular-progress">
            <span class="progress-value">0%</span>
            </div>
            <span className="text">Olde Queens</span>
              <div class="circular-progress">
              <span className="progress-value">0%</span>
            </div>
            <span className="text">Golden Rail</span>
            <div class="circular-progress">
              <span className="progress-value">0%</span>
            </div>
            <span className="text">Huey&apos;s Knight Club</span>
          </div>
        </div>
    </div>
  )
}


