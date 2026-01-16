import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Activities } from "./components/Activities";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="size-full">
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
