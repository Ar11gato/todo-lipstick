import InputField from "../InputField/InputField.jsx";
import OutputField from "../OutputField/OutputField.jsx";
import Footer from "../Footer/Footer.jsx";

import "./board.scss";

import { useEffect, useState } from "react";

export default function Board() {
  const [input, setInput] = useState();
  const [filter, setFilter] = useState("all");
  const [newList, setNewList] = useState([]);

  const [filteredList, setFilteredList] = useState([]);

  const [itemsLeft, setItemsLeft] = useState(1);

  const [list, setList] = useState([
    {
      id: Math.random(),
      text: "first task",
      minutes: 0,
      seconds: 1,
      status: "output-element completed",
      checked: true,
      timerIsActive: false,
    },
    {
      id: Math.random(),
      text: "second task",
      minutes: 0,
      seconds: 2,
      status: "output-element active",
      checked: false,
    },
    {
      id: Math.random(),
      text: "third task",
      minutes: 0,
      seconds: 3,
      status: "output-element completed",
      checked: true,
    },
  ]);

  useEffect(() => {
    setList(list.map((item) => (item.id === newList.id ? newList : item)));
    console.log(list);
  }, [newList]);

  useEffect(() => {
    if (input) {
      setList([...list, input]);
    }
  }, [input]);

  const getFilteredList = () => {
    switch (filter) {
      case "active":
        return list.filter((item) => !item.checked);
      case "completed":
        return list.filter((item) => item.checked);
      case "all":
        return list;
    }
  };

  useEffect(() => {
    const filList = getFilteredList();
    setFilteredList(filList);
  }, [filter]);

  useEffect(() => {
    setItemsLeft(0);
    getFilteredList().map((item) => {
      if (!item.checked) {
        setItemsLeft((prev) => prev + 1);
      }
    });
  }, [list]);

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const clearCompleted = () => {
    setList(list.filter((item) => !item.checked));
  };

  return (
    <>
      <div className="first-screen">
        <div className="board">
          <InputField setInput={setInput} />
          <div className="output-field">
            <ul
              className="list"
              onClick={() => {
                // console.log(list);
              }}
            >
              {getFilteredList().map((item) => (
                <OutputField
                  key={item.id}
                  list={list}
                  item={item}
                  setList={setList}
                  setNewList={setNewList}
                  deleteItem={deleteItem}
                />
              ))}
            </ul>
          </div>
          <Footer
            items={itemsLeft}
            setFilter={setFilter}
            clearCompleted={clearCompleted}
            list={list}
          />
          <button
            className="edit-btn"
            onClick={() => {
              console.log(list);
            }}
          >
            click on me
          </button>
        </div>
      </div>
    </>
  );
}
