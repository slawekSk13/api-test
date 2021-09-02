import { Card } from "../components/Card/Card";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../components/Pagination/Pagination";

const PostsView = ({ posts, handleCreateNew, handleDelete, handleEdit }) => {
  const [page, setPage] = useState(0);
  const handlePageChange = (value, pagesCount) => {
    if (value > 0 && value <= pagesCount.length) {
      setPage(parseInt(value) - 1);
    }
  };

  return (
    <>
      <Pagination
        posts={posts}
        handlePageChange={handlePageChange}
        currentPage={page}
      />
      <main className="main">
        <button
          onClick={handleCreateNew}
          className="button is-success is-fullwidth"
        >
          New
        </button>

        {posts.slice(page * 10, page * 10 + 10).map((post) => (
          <Card
            key={post.id}
            post={post}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </main>
      <Pagination
        posts={posts}
        handlePageChange={handlePageChange}
        currentPage={page}
      />
    </>
  );
};

export { PostsView };
