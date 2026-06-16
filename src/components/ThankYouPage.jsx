function ThankYouPage({ thankYou, setThankYou }) {
  return (
    <div>
      <h4>Thank You Page Setup</h4>
      <input
        type="text"
        value={thankYou.title}
        onChange={(e) => setThankYou({ ...thankYou, title: e.target.value })}
        placeholder="Thank You Title"
      />
      <input
        type="text"
        value={thankYou.subtitle}
        onChange={(e) => setThankYou({ ...thankYou, subtitle: e.target.value })}
        placeholder="Thank You Subtitle"
      />
      <input
        type="text"
        value={thankYou.buttonText}
        onChange={(e) => setThankYou({ ...thankYou, buttonText: e.target.value })}
        placeholder="Button Text"
      />
    </div>
  );
}

export default ThankYouPage;
