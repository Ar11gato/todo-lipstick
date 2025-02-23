import React, { useRef } from "react";

const InputField = ({ setText }) => {
  const defaultText = {
    text: "",
    minutes: 0,
    seconds: 10,
    status: "active",
  };

  const textRef = useRef(null);
  const minutesRef = useRef(null);
  const secondsRef = useRef(null);

  const [time, setTime] = React.useState(defaultText);

  const handleMinutes = (event) => {
    const newMinutes = event.target.value;
    setTime((prev) => ({
      ...prev,
      minutes: newMinutes,
    }));
  };

  const handleSeconds = (event) => {
    const newSeconds = event.target.value;
    setTime((prev) => ({
      ...prev,
      seconds: newSeconds,
    }));
  };

  const handleText = (event) => {
    const newText = event.target.value;

    setTime((prev) => ({
      ...prev,
      text: newText,
    }));
  };

  const onKeyEnter = (event) => {
    if (event.key === "Enter") {
      if (textRef.current.value !== "") {
        setText(time);
        setTime(defaultText);
        textRef.current.value = "";
        minutesRef.current.value = "";
        secondsRef.current.value = "";
      }
    }
  };

  return (
    <div className="input-field">
      <input
        ref={textRef}
        placeholder="текст"
        type="text"
        className="text-field"
        onChange={handleText}
        onKeyUp={onKeyEnter}
      />
      <div className="time-field">
        <input
          ref={minutesRef}
          placeholder="Min"
          type="number"
          min="0"
          max="60"
          className="minutes"
          onChange={handleMinutes}
          onKeyUp={onKeyEnter}
        ></input>
        <input
          ref={secondsRef}
          placeholder="Sec"
          type="number"
          min="0"
          max="60"
          className="seconds"
          onChange={handleSeconds}
          onKeyUp={onKeyEnter}
        ></input>
      </div>
    </div>
  );
};
export default InputField;
