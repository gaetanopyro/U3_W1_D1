import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <ButtonComponent />
      <ImageComponent ImageSrc="https://wallpapercave.com/wp/wp2506840.jpg" style={{ border: "5px solid brown", borderRadius: "30px" }} />
      <ImageComponent
        ImageSrc="https://downloadwap.com/thumbs2/wallpapers/p2ls/2019/nature/49/38e9e0d213492817.jpg"
        style={{ border: "5px solid brown", borderRadius: "30px" }}
      />
      <ImageComponent
        ImageSrc="https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/eb54052e27e6447dbeaaa08a068b839b.jpg_r_640x380x70_92556a7a.jpg"
        style={{ border: "5px solid brown", borderRadius: "30px" }}
      />
      <FooterComponent />
    </>
  );
}

export default App;
