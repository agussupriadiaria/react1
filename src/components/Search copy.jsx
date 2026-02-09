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
        <input
          className="input-search"
          type="text"
          onChange={handleInputChange}
        />
      </div>
      <small>Ditemukan 0 dari pencarian kata anda {search}</small>
      <br />
    </>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
