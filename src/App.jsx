import { useState } from "react";
import ContentTab from "./components/ContentTab";
import RatingOptions from "./components/RatingOptions";
import ThankYouPage from "./components/ThankYouPage";
import StylingTab from "./components/StylingTab";
import Preview from "./components/Preview";
import SectionBox from "./components/SectionBox";   // ✅ import

function App() {
  const [content, setContent] = useState({
    title: "Customer Satisfaction Survey",
    subtitle: "We value your feedback",
  });

  const [style, setStyle] = useState({
    bgColor: "#ffffff",
    textColor: "#000000",
    buttonColor: "#007bff",
    buttonTextColor: "#ffffff",
    titleColor: "#000000",
    subtitleColor: "#333333",
    fontSize: 14,
    fontWeight: "normal",
    borderRadius: 5,
    buttonWidth: 100,
    buttonHeight: 40,
    ratingSelectedColor: "#007bff",
    ratingUnselectedColor: "#f9f9f9",
  });

  const [ratings, setRatings] = useState(["1", "2", "3", "4", "5"]);
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState("");
  const [thankYou, setThankYou] = useState({
    title: "Thank You!",
    subtitle: "Your feedback helps us improve",
    buttonText: "Close",
  });

  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
      {/* Left side: stacked boxes */}
      <div style={{ flex: 1 }}>
        <SectionBox title="Content Tab">
          <ContentTab content={content} setContent={setContent} />
        </SectionBox>

        <SectionBox title="Rating Options">
          <RatingOptions ratings={ratings} setRatings={setRatings} />
          <div style={{ marginTop: "10px" }}>
            <label>
              <input
                type="checkbox"
                checked={showComment}
                onChange={(e) => setShowComment(e.target.checked)}
              />
              Enable Comment Box
            </label>
          </div>
        </SectionBox>

        <SectionBox title="Thank You Page Setup">
          <ThankYouPage thankYou={thankYou} setThankYou={setThankYou} />
        </SectionBox>

        <SectionBox title="Styling Tab">
          <StylingTab style={style} setStyle={setStyle} />
        </SectionBox>
      </div>

      {/* Right side: Live Preview */}
  <div style={{ flex: 1 }}>
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff", 
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        maxWidth: "300px",       
        margin: "0 auto",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: "15px",
          fontSize: "18px",
          fontWeight: "600",
          color: "#333",
          borderBottom: "2px solid #007bff",
          paddingBottom: "6px",
          textAlign: "center",
        }}
      >
        Live Preview
      </h3>

      <Preview
        content={content}
        style={style}
        ratings={ratings}
        showComment={showComment}
        comment={comment}
        thankYou={thankYou}
      />
    </div>
  </div>
</div>
  );
}

export default App;
