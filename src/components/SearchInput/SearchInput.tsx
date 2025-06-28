import React, { KeyboardEvent, useState } from 'react';

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
  initialValue?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, initialValue = '' }) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleSearch = () => {
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="input-container">
      <div className="search">
        <h2 className="search-text">Search</h2>
        <input
          type="text"
          placeholder="Search game..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button className="search-button" onClick={handleSearch} disabled={!inputValue.trim()}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchInput;
