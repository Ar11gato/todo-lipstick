import "./styles/app.scss";

import InputField from "./components/InputField.jsx";
import OutputField from "./components/OutputField.jsx";
import Footer from "./components/Footer.jsx";

import React, { useEffect } from "react";

export default function Board() {
  const [sortName, setSortName] = React.useState("all");
  const [nameClass, setNameClass] = React.useState("");
  const [value, setValue] = React.useState("");
  const [list, setList] = React.useState([
    {
      text: "tr",
      minutes: 0,
      seconds: 10,
      status: "active",
    },
  ]);

  useEffect(() => {
    if (value !== "") {
      setList([...list, value]);
    }
    console.log(sortName);
  }, [value]);

  useEffect(() => {
    updateStatus(nameClass.index, nameClass.statusName);
  }, [nameClass]);

  const updateStatus = (index, newStatus) => {
    setList((prevLi) =>
      prevLi.map((item, i) =>
        i === index ? { ...item, status: newStatus } : item,
      ),
    );
  };

  const getFilteredList = () => {
    if (sortName === "completed") {
      return list.filter((item) => item.status === "edit");
    }
    if (sortName === "active") {
      return list.filter((item) => item.status === "active");
    }

    return list;
  };

  const filteredList = getFilteredList();
  console.log(sortName);

  console.log(filteredList);

  return (
    <>
      <div className="first-screen">
        <div className="board">
          <InputField setText={setValue} />
          <div className="output-field">
            <ul className="list">
              {filteredList.map((item, index) => (
                <OutputField
                  index={index}
                  key={index}
                  text={item.text}
                  minutes={item.minutes}
                  seconds={item.seconds}
                  statusName={item.status}
                  setterStatusName={setNameClass}
                />
              ))}
            </ul>
          </div>
          <Footer setSort={setSortName} />
        </div>
      </div>
    </>
  );
}
