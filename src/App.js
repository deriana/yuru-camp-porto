import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Banner from "./components/banner";
import Chara from "./components/chara";
import Profile from "./components/profile";
import { useState } from "react";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="App">
      <Header />
      <About />
      <Banner />
      <Profile onSelectCharacter={handleSelectCharacter} />
      <Chara chara={selectedCharacter} />
    </div>
  );
}

export default App;