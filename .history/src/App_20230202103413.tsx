import React from "react";
import GalleryLayout from "./components/GalleryLayout";
import Typography from "./ui-kit/Typography";

function App() {
  return (
    <div>
      <Typography fontSize="80px" fontWeight="600" color="#D6D1B1">
        Online Gallery
      </Typography>
      <Typography fontSize="20px" fontWeight="600" color="">
        Image lazy loading and infinity scrolling. Special for &emsp;
        <Typography color="#D6D1B1" fontSize="30px">
          Arion Fund
        </Typography>
      </Typography>
      <GalleryLayout />
    </div>
  );
}

export default App;