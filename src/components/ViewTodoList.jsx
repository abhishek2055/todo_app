import React, { useState } from "react";

const ViewTodoList = ({ todoList }) => {
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const [uindex, setUindex] = useState();

  // console.log("todos",todoList);
  console.log(data);
  console.log(uindex);

  return (
    <ul>
      {todoList.map((list, i) => (
        <li
        key={i}
          onClick={() => (setClick(!click), setData(list), setUindex(i))}
        >
          <span style={{ textDecoration: click ? "line-through" : "" }}>
            {list}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ViewTodoList;
