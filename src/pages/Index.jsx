import Article from "../components/Article";
import Search from "../components/Search";
import postsData from "../posts.json";
import { useState } from "react";

function Homepage() {
  const [posts, setPost] = useState(postsData);
  const handleSearchChange = (value) => {
    console.log(value);
    const filterPostsData = postsData.filter((item) =>
      item.variant.includes(value),
    );
    setPost(filterPostsData);
  };
  return (
    <>
      <h1>Katalog Motor</h1>
      <Search onSearch={handleSearchChange} />
      {posts.map(({ id, variant, merk, tags, price }) => (
        <Article key={id || variant} {...{ variant, merk, tags, price }} />
      ))}
    </>
  );
}

export default Homepage;
