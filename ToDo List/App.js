import React from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";
import ListCom from "./ListCom";



const getLocalItmes = () => {
  let list = localStorage.getItem('lists');
  console.log(list);

  if (list) {
      return JSON.parse(localStorage.getItem('lists'));
  } else {
      return [];
  }
}

const App = () => {

  const [item,setItem] = useState();
  const [newitem,setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);

  }

  const ListOfItems = () => {
    setNewItem((prevValue)=>{
      return [...prevValue, item]
    });

      setItem(" ");
  };

  return(
    <>
      <div className="main_div">
        <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>

        <input  type="text" value={item} placeholder="Add An Items" onChange={itemEvent}/>
        <Button className="new_btn" onClick={ListOfItems}>
          <AddIcon/>
          </Button>
          <br/>

          <ol>
          
            {newitem.map((val ,index) => {
              return  <ListCom key={index} text ={val} />;
            })}
          </ol>
          <br/>

        </div>

      </div>
    </>
  );
};

export default App;
