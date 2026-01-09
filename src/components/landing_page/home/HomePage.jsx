import { Hero } from "./Hero";
import { AINative } from "./AINative";
import { UseCases } from "./UseCases";
import { Simplification } from "./Simplification";
import { NextGen } from "./NextGen";
import { Categories } from "./Categories";

function HomePage() {
    return ( 
        <>
           <Hero/>
           <AINative />
           <UseCases />
           <Simplification />
           <NextGen />
           <Categories/> 
        </>
     );
}

export default HomePage;