import "./App.css";
import React, { useState } from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import UserImage from "./components/UserImage";
import ModalInput from "./components/ModalInput";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

// The main component for the entire application
function App() {
  const userName = "Yassin";

  // Rendering the main structure of the application
  return (
    <div className="App">
      {/* Background video for visual appeal */}
      <video
        id="background-video"
        src="/assets/Videos/backgroundVideo.mp4"
        autoPlay
        loop
        muted
      />

      {/* Bootstrap Card component for displaying product information */}
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

      {/* An user image to be displayed when the first name is provided */}
      {userName && <UserImage className="user-image" />}

      {/* Greeting message with the default or provided username */}
      <h3 className="text-light">Hello, {userName || "there!"}</h3>

    </div>
  );
}

export default App;
