function StylingTab({ style, setStyle }) {
  return (
    <div>
      <h4>Styling Options</h4>

      {/* Background Color */}
      <label>Background Color:</label>
      <input
        type="color"
        value={style.bgColor}
        onChange={(e) => setStyle({ ...style, bgColor: e.target.value })}
      />

      {/* Title Color */}
      <label>Title Color:</label>
      <input
        type="color"
        value={style.titleColor}
        onChange={(e) => setStyle({ ...style, titleColor: e.target.value })}
      />

      {/* Subtitle Color */}
      <label>Subtitle Color:</label>
      <input
        type="color"
        value={style.subtitleColor}
        onChange={(e) => setStyle({ ...style, subtitleColor: e.target.value })}
      />

      {/* Button Color */}
      <label>Button Color:</label>
      <input
        type="color"
        value={style.buttonColor}
        onChange={(e) => setStyle({ ...style, buttonColor: e.target.value })}
      />

      {/* Button Text Color */}
      <label>Button Text Color:</label>
      <input
        type="color"
        value={style.buttonTextColor}
        onChange={(e) => setStyle({ ...style, buttonTextColor: e.target.value })}
      />

      {/* Font Size */}
      <label>Font Size (px):</label>
      <input
        type="number"
        value={style.fontSize}
        onChange={(e) => setStyle({ ...style, fontSize: e.target.value })}
      />

      {/* Font Weight */}
      <label>Font Weight:</label>
      <select
        value={style.fontWeight}
        onChange={(e) => setStyle({ ...style, fontWeight: e.target.value })}
      >
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
        <option value="lighter">Lighter</option>
      </select>

      {/* Border Radius */}
      <label>Border Radius (px):</label>
      <input
        type="number"
        value={style.borderRadius}
        onChange={(e) => setStyle({ ...style, borderRadius: e.target.value })}
      />

      {/* Button Width */}
      <label>Button Width (px):</label>
      <input
        type="number"
        value={style.buttonWidth}
        onChange={(e) => setStyle({ ...style, buttonWidth: e.target.value })}
      />

      {/* Button Height */}
      <label>Button Height (px):</label>
      <input
        type="number"
        value={style.buttonHeight}
        onChange={(e) => setStyle({ ...style, buttonHeight: e.target.value })}
      />

      {/* Rating Selected Color */}
      <label>Rating Selected Color:</label>
      <input
        type="color"
        value={style.ratingSelectedColor}
        onChange={(e) =>
          setStyle({ ...style, ratingSelectedColor: e.target.value })
        }
      />

      {/* Rating Unselected Color */}
      <label>Rating Unselected Color:</label>
      <input
        type="color"
        value={style.ratingUnselectedColor}
        onChange={(e) =>
          setStyle({ ...style, ratingUnselectedColor: e.target.value })
        }
      />
    </div>
  );
}

export default StylingTab;
