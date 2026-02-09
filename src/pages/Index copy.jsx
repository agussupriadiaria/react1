import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";
import { useState } from "react";

function Homepage() {
  const [posts, setPost] = useState(postsData);
  const handleSearchChange = (value) => {
    console.log(value);
    const filterPosts = postsData.filter((item) => item.title.includes(value));
    setPost(filterPosts);
  };
  return (
    <>
      <h1>Katalog Buku</h1>
      <Search onSearch={handleSearchChange} />
      {posts.map(({ id, title, tags, price }) => (
        <Article key={id || title} {...{ title, tags, price }} />
      ))}
    </>
  );
}

export default Homepage;
