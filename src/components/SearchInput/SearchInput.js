import './SearchInput.css';

const SearchInput = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`search__box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchInput;