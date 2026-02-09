import { useState } from "react";
import PropTypes from "prop-types";

function Search({ onSearch }) {
  const [search, setSearch] = useState("");
  const handleInputChange = (event) => {
    const q = event.target.value;
    setSearch(q);
    if (onSearch) onSearch(q);
  };
  return (
    <>
      <div>
        Cari: &nbsp;
        <input type="text" onChange={handleInputChange} />
      </div>
      <small>Pencarian dengan kata kunci {search}</small>
    </>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
