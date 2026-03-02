import { Hero } from "./Hero";
import { AINative } from "./AINative";
import { UseCases } from "./UseCases";
import { Simplification } from "./Simplification";
import { NextGen } from "./NextGen";
import { Categories } from "./Categories";
import { SlidingImages } from "./SlidingImages";
import NavigateButton from "./HealthScoreButton";


function HomePage() {
    return ( 
        <>
           <Hero/>
           <NavigateButton onClick={() => window.location.href = '/health-score'} />
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