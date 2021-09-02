import React from "react";

const Pagination = ({ posts, handlePageChange, currentPage }) => {
  let pagesCount = [];
  for (let i = 1; i <= posts.length / 10; i++) {
    pagesCount.push(i);
  }
  if (posts.length % 10 !== 0) {
    pagesCount.push(pagesCount.length + 1);
  }
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <a
        className="pagination-previous"
        onClick={() => handlePageChange(currentPage, pagesCount)}
      >
        Previous
      </a>
      <a
        className="pagination-next"
        onClick={() => handlePageChange(currentPage + 2, pagesCount)}
      >
        Next page
      </a>
      <ul className="pagination-list">
        {pagesCount.map((el) => (
          <li
            key={el}
            className={
              currentPage === el - 1
                ? "pagination-link is-current"
                : "pagination-link"
            }
            onClick={() => handlePageChange(el, pagesCount)}
          >
            {el}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Pagination };
