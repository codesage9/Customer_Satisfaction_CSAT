function SectionBox({ title, children }) {
  return (
    <div
      style={{
        borderRadius: "10px",
        marginBottom: "25px",
        backgroundColor: "#1e1e2f", // dark card background
        color: "#f5f5f5",           // light text for readability
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
        padding: "20px",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: "15px",
          fontSize: "20px",
          fontWeight: "700",
          color: "#f5f5f5", // heading text stays light
          borderBottom: "2px solid #ffb400", // underline accent
          paddingBottom: "6px",
          letterSpacing: "0.5px",
        }}
      >
        {title}
      </h3>

      {children}
    </div>
  );
}

export default SectionBox;
