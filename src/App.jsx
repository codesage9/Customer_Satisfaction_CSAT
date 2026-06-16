import { useState } from "react";
import ContentTab from "./components/ContentTab";
import StylingTab from "./components/StylingTab";
import Preview from "./components/Preview";
import RatingOptions from "./components/RatingOptions";
import CommentBox from "./components/CommentBox";
import ThankYouPage from "./components/ThankYouPage";

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

  const [ratings, setRatings] = useState(["1", "2", "3", "4", "5"]);


  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState("");

  const [thankYou, setThankYou] = useState({
  title: "Thank You!",
  subtitle: "Your feedback helps us improve.",
  buttonText: "Close",
});

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>
        <h2>Content Tab</h2>
        <ContentTab content={content} setContent={setContent} />

        {/* NEW: Rating Options */}
        <RatingOptions ratings={ratings} setRatings={setRatings} />

        {/* NEW: Comment Box */}
        <CommentBox
          showComment={showComment}
          setShowComment={setShowComment}
          comment={comment}
          setComment={setComment}
        />

        {/* NEW: Thank You Page Setup */}
        <ThankYouPage thankYou={thankYou} setThankYou={setThankYou} />
        
        <h2>Styling Tab</h2>
        <StylingTab style={style} setStyle={setStyle} />
      </div>

      <div>
        <h2>Live Preview</h2>
        {/* Pass ratings + comment into Preview */}
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
  );
}

export default App;
