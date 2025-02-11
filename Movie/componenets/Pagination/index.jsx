import React from "react";
import "./index.css";

const Pagination = ({ currentPage, totalPage, handleNext, handlePrev }) => {
  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {currentPage}/{totalPage}
      <button
        className="pagination__button"
        onClick={handleNext}
        disabled={currentPage === totalPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;