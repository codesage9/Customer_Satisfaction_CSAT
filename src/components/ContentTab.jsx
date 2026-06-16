function ContentTab({ content, setContent }) {
  return (
    <div>
      <input
        type="text"
        value={content.title}
        onChange={(e) => setContent({ ...content, title: e.target.value })}
        placeholder="Enter title"
      />
      <input
        type="text"
        value={content.subtitle}
        onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
        placeholder="Enter subtitle"
      />
    </div>
  );
}

export default ContentTab;
