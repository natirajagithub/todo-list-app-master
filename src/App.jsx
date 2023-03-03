import React, { useState } from "react";
import "./App.css";
import ShowItem from "./ShowItem";

const App = () => {
  const [InputItem, setInputItem] = useState("");
  const [List, setList] = useState([]);
  const ItemEvent = (event) => {
    setInputItem(event.target.value);
  };
  const ListofItem = () => {
    if(InputItem!==''){
        
        setList((oldList) => {
          return [...oldList, InputItem];
        });
        setInputItem("");
    }
  };

const deleteItems=(id)=>{
    setList((oldList)=>{
        return oldList.filter((arrEle,index)=>{
            return index!==id;
        })
    })
}

  return (
    <>
      <div className="title">
        <h1>Todo List</h1>
      </div>
      <div className="OuterBox">
        <div className="MainBox">
          <div className="Inputs">
            <input
              type="text"
              placeholder="Enter Detail"
              value={InputItem}
              onChange={ItemEvent}
            />
            <button onClick={ListofItem}>+</button>
          </div>
          <div className="Data">
            <ol>
              {List.map((itemval, index) => {
                return (
                    <ShowItem 
                    key={index}
                    id={index}
                    text={itemval} 
                    onSelect={deleteItems}
                    />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
