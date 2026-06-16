function ThankYouPage({ thankYou, setThankYou }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // stack rows vertically
        gap: "15px",             // spacing between rows
      }}
    >
      {/* Title row */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <label style={{ flex: "0 0 120px", fontWeight: "600" }}>Title:</label>
        <input
          type="text"
          value={thankYou.title}
          onChange={(e) =>
            setThankYou({ ...thankYou, title: e.target.value })
          }
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Subtitle row */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <label style={{ flex: "0 0 120px", fontWeight: "600" }}>Subtitle:</label>
        <input
          type="text"
          value={thankYou.subtitle}
          onChange={(e) =>
            setThankYou({ ...thankYou, subtitle: e.target.value })
          }
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Button Text row */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <label style={{ flex: "0 0 120px", fontWeight: "600" }}>Button Text:</label>
        <input
          type="text"
          value={thankYou.buttonText}
          onChange={(e) =>
            setThankYou({ ...thankYou, buttonText: e.target.value })
          }
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>
    </div>
  );
}

export default ThankYouPage;
