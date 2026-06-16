function StylingTab({ style, setStyle }) {
  const rowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "12px",
  };

  const labelStyle = {
    flex: "1",
    marginRight: "10px",
  };

  const inputStyle = {
    width: "100px", 
  };

  return (
    <div style={{ padding: "10px" }}>

      <div style={rowStyle}>
        <label style={labelStyle}>Background Color:</label>
        <input
          type="color"
          value={style.bgColor}
          onChange={(e) => setStyle({ ...style, bgColor: e.target.value })}
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Title Color:</label>
        <input
          type="color"
          value={style.titleColor}
          onChange={(e) => setStyle({ ...style, titleColor: e.target.value })}
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Subtitle Color:</label>
        <input
          type="color"
          value={style.subtitleColor}
          onChange={(e) => setStyle({ ...style, subtitleColor: e.target.value })}
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Button Color:</label>
        <input
          type="color"
          value={style.buttonColor}
          onChange={(e) => setStyle({ ...style, buttonColor: e.target.value })}
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Button Text Color:</label>
        <input
          type="color"
          value={style.buttonTextColor}
          onChange={(e) => setStyle({ ...style, buttonTextColor: e.target.value })}
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Font Size (px):</label>
        <input
          type="number"
          value={style.fontSize}
          onChange={(e) => setStyle({ ...style, fontSize: e.target.value })}
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Font Weight:</label>
        <select
          value={style.fontWeight}
          onChange={(e) => setStyle({ ...style, fontWeight: e.target.value })}
          style={inputStyle}
        >
          <option value="normal">Normal</option>
          <option value="bold">Bold</option>
          <option value="lighter">Lighter</option>
        </select>
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Border Radius (px):</label>
        <input
          type="number"
          value={style.borderRadius}
          onChange={(e) => setStyle({ ...style, borderRadius: e.target.value })}
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Button Width (px):</label>
        <input
          type="number"
          value={style.buttonWidth}
          onChange={(e) => setStyle({ ...style, buttonWidth: e.target.value })}
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Button Height (px):</label>
        <input
          type="number"
          value={style.buttonHeight}
          onChange={(e) => setStyle({ ...style, buttonHeight: e.target.value })}
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Rating Selected Color:</label>
        <input
          type="color"
          value={style.ratingSelectedColor}
          onChange={(e) =>
            setStyle({ ...style, ratingSelectedColor: e.target.value })
          }
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Rating Unselected Color:</label>
        <input
          type="color"
          value={style.ratingUnselectedColor}
          onChange={(e) =>
            setStyle({ ...style, ratingUnselectedColor: e.target.value })
          }
          style={inputStyle}
        />
      </div>
    </div>
  );
}

export default StylingTab;
