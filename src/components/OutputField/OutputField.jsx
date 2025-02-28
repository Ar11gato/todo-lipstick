import React, { useEffect, useRef, useState } from "react";

import "./outputField.scss";

import playBtn from "../../assets/play.svg";
import stopBtn from "../../assets/stop.svg";

const OutputField = ({ list, item, setList, setNewList }) => {
  const [time, setTime] = useState(item.minutes * 60 + item.seconds);
  const [checked, setChecked] = useState(item.checked);
  const [hidden, setHidden] = useState(["flex", "none"]);

  const [status, setStatus] = useState(item.status);

  useEffect(() => {
    const updateItem = {
      ...item,
      checked: checked,
      status: status,
    };
    setNewList(updateItem);
  }, [checked]);

  const toggleStatus = () => {
    const newStatus =
      status === "output-element active"
        ? "output-element completed"
        : "output-element active";

    setStatus(newStatus);
    setChecked(!checked);
  };

  const toggleText = (event) => {
    const newText = event.target.value;
    const updateItem = {
      ...item,
      text: newText,
    };
    setNewList(updateItem);
  };

  const submitEdit = (event) => {
    if (event.key === "Enter") {
      setHidden(["flex", "none"]);
      toggleText(event);
    }
  };

  return (
    <li className={item.status}>
      <input
        style={{ display: hidden[1] }}
        type="text"
        className="edit-input"
        onKeyUp={submitEdit}
      />
      <div style={{ display: hidden[0] }} className="unhidden">
        <div className="text">
          <input
            checked={item.checked}
            type="checkbox"
            className="checkbox"
            onChange={toggleStatus}
          />
          <span className="span">{item.text}</span>
        </div>
        <div className="time-panel">
          <img
            src={playBtn}
            alt=""
            className="play-btn"
            onClick={() => {
              console.log("new item: ");
            }}
          />
          <div className="timer">
            {Math.floor(time / 60)}:{time % 60}
          </div>
          <div className="time-info">a few seconds ago</div>
        </div>
        <div className="buttons">
          <button
            className="edit-btn"
            onClick={() => {
              if (item.checked === false) {
                setHidden(["none", "flex"]);
              }
            }}
          >
            edit
          </button>
          <button className="delete-btn">X</button>
        </div>
      </div>
    </li>
  );
};
export default OutputField;
