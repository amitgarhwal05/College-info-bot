import { useEffect, useState } from "react";

const suggestionMap = {
  default: ["Library", "Exams", "Hostel", "Robotics Club"],

  library: ["Library timing", "Library rules", "Books availability"],
  exam: ["Exam schedule", "Result date", "Exam pattern"],
  hostel: ["Hostel fee", "Hostel timing", "Mess food"],
  robotics: ["Robotics Club timing", "Projects", "Events"]
};

function getContext(text) {
  text = text.toLowerCase();

  if (text.includes("library")) return "library";
  if (text.includes("exam")) return "exam";
  if (text.includes("hostel")) return "hostel";
  if (text.includes("robotics")) return "robotics";

  return "default";
}

function Suggestions({ lastBotMessage, onSelect }) {
  const [items, setItems] = useState(suggestionMap.default);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const context = getContext(lastBotMessage || "");
    setItems(suggestionMap[context] || suggestionMap.default);

    // animation delay
    setVisible(false);
    setTimeout(() => setVisible(true), 100);
  }, [lastBotMessage]);

  return (
    <div className={`suggestion-wrapper ${visible ? "show" : ""}`}>
      <p className="suggestion-title">💡 You can ask:</p>

      <div className="suggestions">
        {items.map((item, index) => (
          <button
            key={index}
            className="suggestion-btn"
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;