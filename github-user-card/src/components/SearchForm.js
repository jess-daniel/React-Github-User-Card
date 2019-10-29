import React from "react";

const SearchForm = props => {
  return (
    <div>
      <input type="text" value={props.query} onChange={props.handleChanges} />
      <button onClick={props.update}>Get User</button>
    </div>
  );
};

export default SearchForm;
