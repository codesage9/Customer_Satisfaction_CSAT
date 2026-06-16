import { useState } from "react";
import ContentTab from "./components/ContentTab";
import StylingTab from "./components/StylingTab";
import Preview from "./components/Preview";
import RatingOptions from "./components/RatingOptions";

function App() {
  const [content, setContent] = useState({
    title: "Customer Satisfaction Survey",
    subtitle: "We value your feedback",
  });

  const [style, setStyle] = useState({
    bgColor: "#ffffff",
    textColor: "#000000",
    buttonColor: "#007bff",
  });

  // NEW: ratings state
  const [ratings, setRatings] = useState(["⭐", "⭐⭐", "⭐⭐⭐"]);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>
        <h2>Content Tab</h2>
        <ContentTab content={content} setContent={setContent} />

        {/* NEW: Rating Options */}
        <RatingOptions ratings={ratings} setRatings={setRatings} />

        <h2>Styling Tab</h2>
        <StylingTab style={style} setStyle={setStyle} />
      </div>

      <div>
        <h2>Live Preview</h2>
        {/* Pass ratings into Preview */}
        <Preview content={content} style={style} ratings={ratings} />
      </div>
    </div>
  );
}

export default App;
