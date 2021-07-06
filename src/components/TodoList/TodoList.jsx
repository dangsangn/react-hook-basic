import React from "react";

function TodoList(props) {
  const { todoList, onDeleteTask } = props;
  function onClickDeleteTask(task) {
    onDeleteTask(task);
  }

  return (
    <div>
      {todoList.map((item) => {
        return (
          <li key={item.id} onClick={() => onClickDeleteTask(item)}>
            {item.name}
          </li>
        );
      })}
    </div>
  );
}

TodoList.propTypes = {};

TodoList.defaultProps = {
  todoList: [],
  onDeleteTask: null,
};
export default TodoList;
