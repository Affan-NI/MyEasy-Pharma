import { Hero } from "./Hero";
import { AINative } from "./AINative";
import { UseCases } from "./UseCases";
import { Simplification } from "./Simplification";
import { NextGen } from "./NextGen";
import { Categories } from "./Categories";
import { SlidingImages } from "./SlidingImages";



function HomePage() {
    return ( 
        <>
           <Hero/>
           <SlidingImages/>
           <UseCases />
           <Categories/>
           <AINative /> 
           <Simplification />
           <NextGen />  
        </>
     );
}

export default HomePage;