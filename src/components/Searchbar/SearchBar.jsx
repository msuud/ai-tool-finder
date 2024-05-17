import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div style={{ transform: "translateX(50%);" }}>
        <div class='container p-5'>
          <div class='d-flex justify-content-center flex-column text-center'>
            <div class='display-5 dark-text m-5'>Search for AI here</div>
            <div class="d-flex justify-content-center h-100">
              <div class="search">
                <input class="search_input" type="text" placeholder="Search here..." />
                <a href="#" class="search_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SearchBar;
