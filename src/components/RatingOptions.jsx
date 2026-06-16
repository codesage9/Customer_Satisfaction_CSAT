import { useState } from "react";

function RatingOptions({ ratings, setRatings }) {
  const [newOption, setNewOption] = useState("");

  const addOption = () => {
    const num = parseInt(newOption, 10);

    // Validation rules
    if (isNaN(num)) {
      alert("Please enter a number.");
      return;
    }
    if (num < 1 || num > 10) {
      alert("Rating must be from 1 to 10.");
      return;
    }
    if (ratings.includes(num.toString())) {
      alert("This rating already exists.");
      return;
    }

    // Add valid rating and sort
    const updated = [...ratings, num.toString()].sort(
      (a, b) => parseInt(a, 10) - parseInt(b, 10)
    );
    setRatings(updated);
    setNewOption("");
  };

  const removeOption = (index) => {
    const updated = ratings.filter((_, i) => i !== index);
    // Keep sorted after removal (not strictly necessary, but safe)
    const sorted = [...updated].sort(
      (a, b) => parseInt(a, 10) - parseInt(b, 10)
    );
    setRatings(sorted);
  };

  return (
    <div>
      <ul>
        {ratings.map((option, index) => (
          <li key={index}>
            {option}
            <button onClick={() => removeOption(index)}>❌</button>
          </li>
        ))}
      </ul>
      <input
        type="number"
        min="1"
        max="10"
        value={newOption}
        onChange={(e) => setNewOption(e.target.value)}
        placeholder="Add rating option (1-10)"
      />
      <button onClick={addOption}>Add</button>
    </div>
  );
}

export default RatingOptions;
