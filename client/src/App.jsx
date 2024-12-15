import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import BackToTop from "./components/BackToTop";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="my-8 ">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <ContactMe />
      <Toaster />
      <BackToTop />
    </div>
  );
}

export default App;
