import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import News from "./News";
import { AnimatePresence, motion } from "framer-motion"; 
import dynamic from 'next/dynamic'
import {useEffect} from "react";



export default function Widgets({newsResults}) {
  const[articleNum, setArticleNum] = useState(3);
  const[progressValue1, setProgressValue1] = useState(0);
  const[progressValue2, setProgressValue2] = useState(0);
  const[progressValue3, setProgressValue3] = useState(0);

  let progressEndValue1 = 55, progressEndValue2 = 100, progressEndValue3 = 70,
  progressStartValue1 = 0, progressStartValue2 = 0, progressStartValue3 = 0;

useEffect(() => {
  const progress1 = setInterval(() =>{
    if(progressEndValue1 > progressStartValue1){
      progressStartValue1++;
      setProgressValue1(progressStartValue1);
      console.log(progressValue1)
    }
    else{
      clearInterval(progress1);
    }
  }, 40);
  const progress2 = setInterval(() =>{
    if(progressEndValue2 > progressStartValue2){
      progressStartValue2++
      setProgressValue2(progressStartValue2);
    }
    else{
      clearInterval(progress2);
    }
  }, 40);
  const progress3 = setInterval(() =>{
    if(progressEndValue3 > progressStartValue3){
      progressStartValue3++;
      setProgressValue3(progressStartValue3);
    }
    else{
      clearInterval(progress3);
    }
  }, 40);
}, []);
  return (
    <div className="xl:w-[600px] lg:inline ml-8 space-y-5">
        <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
            <div className="flex items-center p-3 rounded-full bg-red-300 relative">
              <SearchIcon className="h-5 z-50 text-gray-500 "/>
                <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100" type="text" placeholder="Search RUbars" />
            </div>
        </div>

        {/* <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
            <h4 className="font-bold text-xl px-4">Whats happening</h4>
        <AnimatePresence>
        {newsResults.slice(0,articleNum).map((article)=>(
          <motion.div key={article.title} initial={{opacity: 0 }} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
           <News key={article.title} article={article}/>
           </motion.div>
        ))}
        </AnimatePresence>
        <button onClick={()=>setArticleNum(articleNum + 3)} className="text-rose-300 pl-4 pb-3 hover:text-rose-400">Show more</button>
        </div> */}
        <div className="text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]">
          <h4 className="font-bold text-xl px-4">Capacity</h4>
          <div className="container">
            <div className="circular-progress" style={{background: `conic-gradient(#E0115F ${progressValue1 * 3.6}deg, #ededed 0deg)`}}>
            <span className="progress-value">{progressValue1}%</span>
            </div>
            <span className="text">Olde Queens</span>
              <div className="circular-progress" style={{background: `conic-gradient(#E0115F ${progressValue2 * 3.6}deg, #ededed 0deg)`}}>
              <span className="progress-value">{progressValue2}%</span>
            </div>
            <span className="text1">Golden Rail</span>
            <div className="circular-progress1" style={{background: `conic-gradient(#E0115F ${progressValue3 * 3.6}deg, #ededed 0deg)`}}>
              <span className="progress-value1">{progressValue3}%</span>
            </div>
            <span className="text">Huey&apos;s Knight Club</span>
            <button className="text-rose-300 pl-4 pb-3 hover:text-rose-400">Show more</button>
          </div>
        </div>
    </div>
  )
}







