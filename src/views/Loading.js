import React from "react";

const Loading = () => {
  return (
    <section className="main">
      <h1 className="title is-1">Loading posts</h1>
      <h2 className="subtitle is-3">please wait</h2>
      <progress className="progress is-primary" max="100" />
    </section>
  );
};

export { Loading };
