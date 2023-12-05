import "./App.css";
// import React from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function App() {
  const userName = "Stranger";

  return (
    <div className="App">
      <video
        id="background-video"
        src="/backgroundVideo.mp4"
        autoPlay
        loop
        muted
      />

      <Card
        style={{ width: "18rem" }}
        className="mx-auto my-2 p-2 bg-dark bg-gradient text-light"
      >
        <Image variant="top" />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      <h3 className="text-light">Hello there {userName}!</h3>
    </div>
  );
}

export default App;
