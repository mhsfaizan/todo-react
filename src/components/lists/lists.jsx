import List from "../list/list";
import React from "react";
import "./lists.css";
export default function Lists(props) {
  return (
    <div className="list-container">
      {props.myLists.map((list) => (
        <List
          onUpdate={props.onUpdate}
          onDelete={props.onDelete}
          key={list.id}
          list={list}
        ></List>
      ))}
    </div>
  );
}
