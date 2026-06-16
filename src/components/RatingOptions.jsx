import { useState } from "react";

function RatingOptions({ ratings, setRatings }) {
  const [newOption, setNewOption] = useState("");

  const addOption = () => {
    if (newOption.trim() !== "") {
      setRatings([...ratings, newOption]);
      setNewOption("");
    }
  };

  const removeOption = (index) => {
    const updated = ratings.filter((_, i) => i !== index);
    setRatings(updated);
  };

  return (
    <div>
      <h4>Rating Options</h4>
      <ul>
        {ratings.map((option, index) => (
          <li key={index}>
            {option}
            <button onClick={() => removeOption(index)}>❌</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newOption}
        onChange={(e) => setNewOption(e.target.value)}
        placeholder="Add rating option"
      />
      <button onClick={addOption}>Add</button>
    </div>
  );
}

export default RatingOptions;
