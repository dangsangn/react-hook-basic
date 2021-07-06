import React from "react";
import { useState, useRef } from "react";
import PropTypes from "prop-types";

SearchPostList.propTypes = {
  onSubmit: PropTypes.func,
};

SearchPostList.defaultProps = {
  onSubmit: null,
};

function SearchPostList(props) {
  let { onSubmit } = props;
  const [keySearch, setKeySearch] = useState("");
  let setTimeoutChange = useRef(null);

  function handleChangeInput(e) {
    const target = e.target;
    setKeySearch(target.value);

    if (!onSubmit) return;
    //trước khi setTimeOut mới thì phải xóa cái cũ
    clearTimeout(setTimeoutChange.current);

    //sau khu user ngừng nhập 300ms thì mới submit
    setTimeoutChange.current = setTimeout(() => {
      console.log(target.value);
      onSubmit(target.value);
    }, 500);
  }

  return (
    <form>
      <label>Tìm kiếm</label>
      <input type="text" value={keySearch} onChange={handleChangeInput} />
    </form>
  );
}

export default SearchPostList;
