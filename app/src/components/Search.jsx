import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  flex: 1;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Search = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search..." />
      <SearchButton>Search</SearchButton>
    </SearchContainer>
  );
};

export default Search;
