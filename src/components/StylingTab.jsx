function StylingTab({ style, setStyle }) {
  return (
    <div>
      <label>Background Color:</label>
      <input
        type="color"
        value={style.bgColor}
        onChange={(e) => setStyle({ ...style, bgColor: e.target.value })}
      />
      <label>Button Color:</label>
      <input
        type="color"
        value={style.buttonColor}
        onChange={(e) => setStyle({ ...style, buttonColor: e.target.value })}
      />
    </div>
  );
}

export default StylingTab;
