import { useState } from "react";

function Preview({ content, style, ratings, showComment, comment, thankYou }) {
  const [submitted, setSubmitted] = useState(false);

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
            style={{
              margin: "5px",
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
              cursor: "pointer",
            }}
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
