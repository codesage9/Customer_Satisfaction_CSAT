function ContentTab({ content, setContent }) {
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
          value={content.title}
          onChange={(e) =>
            setContent({ ...content, title: e.target.value })
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
          value={content.subtitle}
          onChange={(e) =>
            setContent({ ...content, subtitle: e.target.value })
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

export default ContentTab;
