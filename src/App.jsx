import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navbar/navigation";
import ContactHeader from "./components/contactheader/ContactHeader";
import Button from "./components/contactModule/Button/Button";
import ContactForm from "./components/contactModule/ContactForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <main className="main_cointainer">
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
