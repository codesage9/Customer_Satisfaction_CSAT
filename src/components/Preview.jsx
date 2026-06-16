import { useState } from "react";

function Preview({ content, style, ratings, showComment, comment, thankYou }) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const [error, setError] = useState("");

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
    borderRadius: style.borderRadius ? `${style.borderRadius}px` : "10px",
    width: "250px",
    fontSize: style.fontSize ? `${style.fontSize}px` : "14px",
    fontWeight: style.fontWeight || "normal",
  }}
>
  <h3 style={{ color: style.titleColor, fontSize: style.fontSize ? `${style.fontSize}px` : "inherit", fontWeight: style.fontWeight }}>
    {content.title}
  </h3>
  <p style={{ color: style.subtitleColor, fontSize: style.fontSize ? `${style.fontSize}px` : "inherit", fontWeight: style.fontWeight }}>
    {content.subtitle}
  </p>

  <div style={{ marginBottom: "10px" }}>
    {ratings.map((r, i) => (
      <button
        key={i}
        onClick={() => {
          if (selectedRating === r) {
            setSelectedRating(null);
          } else {
            setSelectedRating(r);
          }
          setError("");
        }}
        style={{
          margin: "5px",
          border: "1px solid #ccc",
          borderRadius: style.borderRadius ? `${style.borderRadius}px` : "5px",
          width: style.buttonWidth ? `${style.buttonWidth}px` : "auto",
          height: style.buttonHeight ? `${style.buttonHeight}px` : "auto",
          backgroundColor:
            selectedRating === r
              ? style.ratingSelectedColor || "#007bff"
              : style.ratingUnselectedColor || "#f9f9f9",
          color: selectedRating === r ? "#fff" : "#000",
          cursor: "pointer",
          fontSize: style.fontSize ? `${style.fontSize}px` : "14px",
          fontWeight: style.fontWeight || "normal",
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
      style={{
        width: "100%",
        height: "60px",
        marginBottom: "10px",
        fontSize: style.fontSize ? `${style.fontSize}px` : "14px",
        fontWeight: style.fontWeight || "normal",
        borderRadius: style.borderRadius ? `${style.borderRadius}px` : "5px",
      }}
    />
  )}

  {error && (
    <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
  )}

  <button
    style={{
      backgroundColor: style.buttonColor,
      color: style.buttonTextColor || "#fff",
      padding: "10px",
      border: "none",
      borderRadius: style.borderRadius ? `${style.borderRadius}px` : "5px",
      width: style.buttonWidth ? `${style.buttonWidth}px` : "auto",
      height: style.buttonHeight ? `${style.buttonHeight}px` : "auto",
      fontSize: style.fontSize ? `${style.fontSize}px` : "14px",
      fontWeight: style.fontWeight || "normal",
    }}
    onClick={() => {
      if (!selectedRating) {
        setError("Please select a rating to proceed");
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
