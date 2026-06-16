import { useState } from "react";

function Preview({ content, style, ratings, showComment, comment, thankYou }) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);

  if (submitted) {
    return (
      <div
        style={{
          backgroundColor: style.bgColor,
          color: style.textColor,
          padding: "20px",
          borderRadius: "10px",
          width: "250px",
        }}
      >
        <h3>{thankYou.title}</h3>
        <p>{thankYou.subtitle}</p>
        <button
          style={{
            backgroundColor: style.buttonColor,
            color: "#fff",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
          }}
          onClick={() => setSubmitted(false)}
        >
          {thankYou.buttonText}
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: style.bgColor,
        color: style.textColor,
        padding: "20px",
        borderRadius: "10px",
        width: "250px",
      }}
    >
      <h3>{content.title}</h3>
      <p>{content.subtitle}</p>

      <div style={{ marginBottom: "10px" }}>
        {ratings.map((r, i) => (
          <button
            key={i}
            onClick={() => setSelectedRating(r)} // ✅ set selected rating
            style={{
              margin: "5px",
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor:
                selectedRating === r ? "#007bff" : "#f9f9f9", // ✅ highlight selected
              color: selectedRating === r ? "#fff" : "#000", // ✅ white text if selected
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                selectedRating === r ? "#0056b3" : "#e0e0e0")
            } // ✅ hover effect
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor =
                selectedRating === r ? "#007bff" : "#f9f9f9")
            } // ✅ reset after hover
          >
            {r}
          </button>
        ))}
      </div>

      {showComment && (
        <textarea
          value={comment}
          readOnly
          placeholder="Your feedback..."
          style={{ width: "100%", height: "60px", marginBottom: "10px" }}
        />
      )}

      <button
        style={{
          backgroundColor: style.buttonColor,
          color: "#fff",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={() => setSubmitted(true)}
      >
        Submit
      </button>
    </div>
  );
}

export default Preview;