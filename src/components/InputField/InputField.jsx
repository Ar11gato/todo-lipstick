import React, { useState } from "react";
import "./inputField.scss";

const InputField = ({ setInput }) => {
  const defaultValue = {
    id: Math.random(),
    text: "",
    minutes: 0,
    seconds: 10,
    status: "output-element active",
    checked: false,
  };
  const [value, setValue] = useState(defaultValue);

  // className должен совпадать с ключом value ("text" = text:)
  const handleChangeText = (event) => {
    setValue((prev) => ({
      ...prev,
      [event.target.className]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    if (value.text) {
      if (event.key === "Enter") {
        setInput(value);
        setValue(defaultValue);
      }
    }
  };

  return (
    <div className="input-field">
      <input
        placeholder="текст"
        type="text"
        className="text"
        onChange={handleChangeText}
        onKeyUp={handleSubmit}
        value={value.text}
      />
      <div className="time-field">
        <input
          placeholder="Min"
          type="number"
          min="0"
          max="60"
          className="minutes"
          onChange={handleChangeText}
          onKeyUp={handleSubmit}
          value={value.minutes}
        ></input>
        <input
          placeholder="Sec"
          type="number"
          min="0"
          max="60"
          className="seconds"
          onChange={handleChangeText}
          onKeyUp={handleSubmit}
          value={value.seconds}
        ></input>
      </div>
    </div>
  );
};
export default InputField;
