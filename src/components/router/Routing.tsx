import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Buy, Contact, Home, Investment, Sell, SocialMedia, Team } from '../../pages';
import HouseDetail from '../../pages/HouseDetail';
import AgentDetail from '../../pages/AgentDetail';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/buy/:id" element={<HouseDetail />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<AgentDetail />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
