
import './App.css';
import {useState} from "react"

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];


function App() {
  const [currentImage, setCurrentImage] = useState(0);

  function previousImage(){
    setCurrentImage(currentImage== 0 ? 0 : currentImage-1)
  }
  function nextImage(){
    setCurrentImage(currentImage== images.length ? images.length -1 : currentImage+1)
  }
  return (
    <>
    <div className="App App-header ">
      <div className="p-4 container">
        {currentImage!=0 ?<button onClick={()=>previousImage()}>Previous</button>: ""}
        <img src={images[currentImage]}></img>
        {currentImage!=images.length ?<button onClick={()=>nextImage()}>Next</button>: ""}
      </div>
    </div>
    
    </>
  );
}

export default App;
