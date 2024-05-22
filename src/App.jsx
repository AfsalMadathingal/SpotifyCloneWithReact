import { useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";




function App() {

  const {audioRef,track} = useContext(PlayerContext)

  return (

      <div className=" h-screen bg-black">
        <div className="h-[90%] flex ">
          <Sidebar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} preload="auto" src={track.file}></audio>
      </div>
  
  );
}

export default App;
