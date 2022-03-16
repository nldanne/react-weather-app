import {ReactComponent as SearchIcon} from '../../assets/search.svg'
import './Search.scss';

const Search = () => {

  return (
    <div className="search__wrapper">
        <input type='search' placeholder="Search location" id="search-bar" />
        <SearchIcon id="search-icon" />
    </div>
  )
}

export default Search;