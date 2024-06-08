import { useState } from "react";
import { Send } from "lucide-react";

const CheckboxItem = ({ index, label, checked, onChange }) => {
  return (
    <li
      className={`flex items-center p-2 rounded-md transition duration-200 ${
        checked ? "bg-purple-100 border border-purple-300" : ""
      }`}
    >
      <label className="flex items-center w-full cursor-pointer">
        <input
          type="checkbox"
          className="mr-2"
          checked={checked}
          onChange={() => onChange(index)}
        />
        {label}
      </label>
    </li>
  );
};

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxChange = (index) => {
    setCheckedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const options = [
    "Search from Side_Letters - Tag Along Rights",
    "Another result here",
    "Yet another result",
  ];

  return (
    <div className="border rounded-lg overflow-hidden p-4">
      <div className="flex">
        <select className="px-1 border-purple-200 text-purple-800 ring-0 border rounded-md">
          <option value="option1">Side_Letters</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <input
          type="text"
          className="px-4 w-full border-gray-300 focus:outline-none"
          placeholder="Start your legal search here..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="flex items-center justify-center p-2 bg-purple hover:bg-purple/80 transition duration-200 text-white rounded-md">
          <Send size={16} />
        </button>
      </div>
      {inputValue && (
        <div className="border-t border-purple-100 mt-3 pt-3">
          <ul className="list-none space-y-1">
            {options.map((label, index) => (
              <CheckboxItem
                key={index}
                index={index}
                label={label}
                checked={checkedItems.includes(index)}
                onChange={handleCheckboxChange}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;