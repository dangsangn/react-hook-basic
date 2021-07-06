import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object,
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  onChange: null,
};

function Pagination(props) {
  const { pagination, onChangePage } = props;
  const { _page, _limit, _totalRows } = pagination;
  const numPage = Math.ceil(_totalRows / _limit);

  function changePage(value) {
    onChangePage(value);
  }

  return (
    <div>
      <button
        disabled={_page === 1 ? true : false}
        onClick={() => changePage(_page - 1)}
      >
        Previous
      </button>
      <button
        disabled={_page === numPage ? true : false}
        onClick={() => changePage(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
