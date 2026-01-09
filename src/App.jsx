import { Navbar } from './components/landing_page/Navbar';
import { Pharma40 } from './components/landing_page/pharma4O/Pharma40';
import { IndiasMoment } from './components/landing_page/pharma4O/IndiasMoment';
import { SaaSEcosystem } from './components/landing_page/platform/SaaSEcosystem';
import { AboutUs } from './components/landing_page/about/AboutUs';
import { Founders } from './components/landing_page/about/Founders';
import { PharmacyServices } from './components/landing_page/service/PharmacyServices';
import { CallToAction } from './components/landing_page/contact/CallToAction';
import { Footer } from './components/landing_page/Footer';

import { WhyChooseUs } from './components/landing_page/service/WhyChooseUs';

import HomePage from './components/landing_page/home/HomePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          {/* <Hero ....../> */}
          <Route path='/pharma40' element={
            <>
              <Pharma40/>
              <IndiasMoment />
            </>
          }/>
          {/* <Pharma40 ......./> */}
          {/* <IndiasMoment ...../> */}
          {/* <AINative ........./> */}
          {/* <Simplification ....../> */}
          {/* <NextGen ...../> */}
          {/* <UseCases ......./> */}
          <Route path='/platform' element={<SaaSEcosystem/>}/>
          {/* <SaaSEcosystem   ......../> */}
          <Route path='/service' element={
            <>
              <PharmacyServices/>
              <WhyChooseUs/>
            </>
          }/>
          {/* <PharmacyServices .........../> */}
          <Route path='/about' element={
          <>
            <AboutUs/>
            <Founders />
          </>
          }/>
          {/* <AboutUs /> ..............*/}
          {/* <Founders /> .....*/}
          <Route path='/contact' element={<CallToAction/>}/>
          {/* <CallToAction .............../> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
