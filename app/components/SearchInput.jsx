import React from 'react';

function SearchInput({ onSearch }) {
  let _input;
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch && onSearch(_input.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="search-input" type="text" placeholder="ユーザーを検索" ref={(c) => _input = c} />
    </form>
  )
}

export default SearchInput;
