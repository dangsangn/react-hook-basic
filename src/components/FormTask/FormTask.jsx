import React, { useState } from "react";
import PropTypes from "prop-types";

FormTask.propTypes = {
  onSubmit: PropTypes.func,
};

FormTask.defaultProps = {
  onSubmit: null,
};

function FormTask(props) {
  const { onSubmit } = props;
  const [nameTask, setNameTask] = useState("");
  function handelSubmit(e) {
    e.preventDefault();
    const formValue = {
      name: nameTask,
    };
    onSubmit(formValue);
    setNameTask("");
  }

  function handelChangeInput(e) {
    const target = e.target;
    let name = target.name;
    let value = target.checked ? target.checked : target.value;
    if (name === "nameTask") {
      setNameTask(value);
    }
  }

  return (
    <div>
      <form>
        <label>New task</label>
        <input
          type="text"
          name="nameTask"
          value={nameTask}
          onChange={handelChangeInput}
        />
        <button type="submit" onClick={handelSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormTask;
