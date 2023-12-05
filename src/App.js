// importing the main styles for the application
import "./App.css";

// importing individual components used in the App
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

// importing Bootstrap's CSS and Card component
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

// The main component for the entire application
function App() {
  const userName = "Stranger";

  // Rendering the main structure of the application
  return (
    <div className="App">
      {/* Background video for visual appeal */}
      <video
        id="background-video"
        src="/backgroundVideo.mp4"
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
      {/* Greeting message with the default or provided username */}
      <h3 className="text-light">Hello there {userName}!</h3>
    </div>
  );
}

export default App;
