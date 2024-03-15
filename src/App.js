import Atronaunts from "./components/Atronaunts";
import HeldEvents from "./components/HeldEvents";
import Hero from "./components/Hero";
import RecentEvents from "./components/RecentEvents";
import Socials from "./components/Socials";
import UpcomingEvents from "./components/UpcomingEvents";
import Footer from "./layout/Footer";
import NavBar from "./layout/NavBar";

function App() {
  return (
    <div className="min-h-screen repeating-bg">
      <NavBar />
      <Hero />
      <RecentEvents />
      <Atronaunts />
      <HeldEvents />
      <Socials />
      <UpcomingEvents />
      <Footer />
    </div>
  );
}

export default App;
