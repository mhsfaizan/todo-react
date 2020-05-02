import React from "react";
import "./list.css";
export default function List(props) {
  return (
    <div className="list">
      <div className="d-flex">
        {props.list.id}.{props.list.description}
        <div className="ml-auto mr-2">
          {/* <button onClick={() => props.onUpdate(props.list.id)}>Update</button> */}
          <button onClick={() => props.onDelete(props.list.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
