import Search from "../components/Search";
import postsData from "../posts.json";
import { useState } from "react";
import Article from "../components/Article";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const handleSearchChange = (value) => {
    console.log(value);
    const filterPostsData = postsData.filter((item) =>
      item.title.includes(value),
    );
    setPosts(filterPostsData);
  };
  return (
    <>
      <h1>Book Store</h1>
      <Search onSearch={handleSearchChange} />
      {posts.map(({ id, title, tags, price }) => (
        <Article key={id || title} {...{ title, tags, price }} />
      ))}
    </>
  );
}

export default Homepage;
