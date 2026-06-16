function Preview({ content, style, ratings }) {
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

      {/* NEW: Ratings section */}
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

      <button
        style={{
          backgroundColor: style.buttonColor,
          color: "#fff",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Preview;
