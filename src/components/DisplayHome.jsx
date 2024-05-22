import React from "react";
import Navbar from "./Navbar";
import { albumsData ,songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";


const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4  text-white">
        <h1 className="my-5 font-bold">Featured Charts</h1>
        <div className="flex text-white overflow-auto">
        {albumsData.map((item, index) => (
          <AlbumItem
            key={index}
            image={item.image}
            name={item.name}
            desc={item.desc}
            id={item.id}
          />
        ))}
        </div>
     
      </div>

      <div className="mb-4  text-white">
        <h1 className="my-5 font-bold">Today's Biggest Hits</h1>
        <div className="flex text-white overflow-auto">
        {songsData.map((item, index) => (
          <SongItem
            key={index}
            image={item.image}
            name={item.name}
            desc={item.desc}
            id={item.id}
          />
        ))}
        </div>
     
      </div>
    </>
  );
};

export default DisplayHome;
