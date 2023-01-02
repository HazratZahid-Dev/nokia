
import './App.css';
import Footer from './Compunents/Footer';
import About from './Pages/About';
import Clients from './Pages/Clients';
import FollowOn from './Pages/FollowOn';
import Home from './Pages/Home';
import LatesNews from './Pages/LatesNews';
import MeetWithUs from './Pages/MeetWithUs';
import MyExperiance from './Pages/MyExperiance';
import Office from './Pages/Office';
import PricingPlan from './Pages/PricingPlan';
import Projects from './Pages/Projects';
import SeconPart from './Pages/SeconPart';
import Services from './Pages/Services';

function App() {
  return (
    <div>
    <Home/>
    <SeconPart/>
    <About/>
    <Services/>
    <Projects/>
    <MeetWithUs/>
    <MyExperiance/>
    <Clients/>
    <PricingPlan/>
    <LatesNews/>
    <FollowOn/>
    <Office/>
    <Footer/>
      
    </div>
  );
}

export default App;
