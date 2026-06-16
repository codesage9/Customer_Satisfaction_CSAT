import { useState } from "react";

function Preview({ content, style, ratings, showComment, comment, thankYou }) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const [error, setError] = useState("");   // NEW: error message state

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
            onClick={() => {
              setSelectedRating(r);
              setError(""); // clear error once a rating is chosen
            }}
            style={{
              margin: "5px",
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor:
                selectedRating === r ? "#007bff" : "#f9f9f9",
              color: selectedRating === r ? "#fff" : "#000",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                selectedRating === r ? "#0056b3" : "#e0e0e0")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor =
                selectedRating === r ? "#007bff" : "#f9f9f9")
            }
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

      {/* NEW: Error message */}
      {error && (
        <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
      )}

      <button
        style={{
          backgroundColor: style.buttonColor,
          color: "#fff",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={() => {
          if (!selectedRating) {
            setError("Please select a rating to proceed"); // block submission
            return;
          }
          setSubmitted(true);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Preview;
