import { useState, useEffect } from "react";
import { Divz, DivzVideoItem } from "./lib/Divz";
import "./App.css";

function App() {
  const [demo, setDemo] = useState<number>(2);

  useEffect(() => randomizeDemo(), []);

  const randomizeDemo = () => {
    // const randomNumber = Math.floor(Math.random() * 4) + 1;
    setDemo(4);
  };

  const isActive = (link: number) => {
    return link === demo ? "active" : "";
  };

  return (
    <div className={`app ${demo >= 2 ? "dark-mode" : ""}`}>
      <div className="app-header">
        <div className={`demo-list`}>
          {/* {[3, 4].map((demoNumber) => ( */}
          <img src="./images/nfrlogo.png" width="150" />
          <a
            className="fa fa-film"
            onClick={() => setDemo(3)}>
          </a>
          <a
            className="fa fa-instagram"
            href="https://www.instagram.com/thelillyguildtrust"
          >
          </a>
          <a
            className="fa fa-whatsapp"
            href="https://wa.me/447394074047"
          >
          </a>
          <a
            className="fa fa-phone"
            href="tel:+447394074047"
          >
          </a>
          {/* <a
            key={3}
            className={isActive(3)}
            onClick={() => setDemo(3)}>Videos</a> */}
          {/* <a
            key={4}
            className={isActive(4)}
            onClick={() => setDemo(4)}
          >
            Images
          </a> */}
          {/* ))} */}
        </div>
        <br /><br /><br />
        <h1>Terrormar</h1>
        <small>
          Welcome to the Terrormar club
        </small>
        {/* <a className="github" href="https://github.com/lewhunt/divz">
          <img className="github" src="./images/nfrlogo.png" />
        </a> */}
      </div>

      {demo === 1 ? (
        <Demo1 />
      ) : demo === 2 ? (
        <Demo2 />
      ) : demo === 3 ? (
        <Demo3 />
      ) : (
        <Demo4 />
      )}
    </div>
  );
}

function Demo1() {
  return (
    <Divz autoPlay={true} autoPlayDuration={3000} className="demo1">
      <div>
        <h1>1</h1>
      </div>
      <div>
        <h1>2</h1>
      </div>
      <div>
        <h1>3</h1>
      </div>
      <div>
        <h1>4</h1>
      </div>
    </Divz>
  );
}

function Demo2() {
  return (
    <>
      <video autoPlay playsInline loop muted className="background">
        <source
          src="./demo3/star-stars-night-space-light-121702.mp4"
          type="video/mp4"
        />
      </video>

      <Divz
        autoPlay={true}
        autoPlayDuration={3000}
        className="demo2"
        isDarkMode={true}
      >
        <div>
          <img src="./demo3/astronaut-4106766_1280.jpg" />
        </div>

        <div>
          <img src="./demo3/astronaut-6052199_1280.jpg" />
        </div>

        <div>
          <img src="./demo3/plane-5462276_1280.jpg" />
        </div>

        <div>
          <video autoPlay playsInline loop muted>
            <source
              src="./demo3/space-ship-magic-purple-sci-fi-53601.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </Divz>
    </>
  );
}

// Demo 3 assets from Pixabay and Runway
const demo3Assets = [
  {
    image: "./demo3/astronaut-4106766_1280.jpg",
    video: "./demo3/astronaut-4106766_1280.mp4",
  },
  {
    image: "./demo3/astronaut-6052199_1280.jpg",
    video: "./demo3/astronaut-6052199_1280.mp4",
  },
  {
    image: "./demo3/plane-5462276_1280.jpg",
    video: "./demo3/plane-5462276_1280.mp4",
  },
];

function Demo3() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <>
      <video autoPlay playsInline loop muted className="background">
        <source
          src="./demo3/star-stars-night-space-light-121702.mp4"
          type="video/mp4"
        />
      </video>

      <Divz
        autoPlay={true}
        autoPlayDuration={7000}
        className="demo3"
        isDarkMode={true}
        isExpanded={true}
        showPlayButton={false}
        onIndexChange={(i) => setSelectedIndex(i)}
      >
        {/* Example of using a custom video component that loads/plays when item is active */}
        {demo3Assets.map((item, index) => (
          <DivzVideoItem
            key={index}
            index={index}
            selectedIndex={selectedIndex}
            previewImage={item.image}
            videoSource={item.video}
          ></DivzVideoItem>
        ))}

        {/* Example of just using a standard video element that loads immediately */}
        <div>
          <video autoPlay playsInline loop muted>
            <source
              src="./demo3/space-ship-magic-purple-sci-fi-53601.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </Divz>
    </>
  );
}

const demo4Images: string[] = [];

/* Demo 4 images generated in Midjourney by Manoela Ilic:
https://github.com/codrops/GridItemHoverEffect/
*/
for (let i = 65; i <= 80; i++) {
  demo4Images.push(`./demo4/${i}.jpg`);
}

/* 
Demo 4 design based on works by Alena Orlova and Manoela Ilic:
https://dribbble.com/shots/21567003-SOTA-Branding
https://github.com/codrops/GridItemHoverEffect/
*/
function Demo4() {
  return (
    <>
      <img className="background" src="./demo4/bg.jpg" />

      <Divz className="demo4" autoPlay={true} isDarkMode={true} isExpanded={true} autoPlayDuration={2000}>
        {demo4Images.map((imageUrl, index) => (
          <figure key={index}>
            <img src={imageUrl} />
            <figcaption>
              <div>{(index + 1).toString().padStart(2, "0")}</div>
              <div>{`demo4/${index + 64}.jpg`}</div>
            </figcaption>
          </figure>
        ))}
      </Divz>
    </>
  );
}

export default App;
