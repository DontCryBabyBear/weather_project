import classes from "./Search.module.css";
import { FcSearch } from "react-icons/fc";
import { useRef } from "react";

function Search({ setSearch }) {
  const ref = useRef();
  const onSearch = () => {
    setSearch(ref.current.value);
  };
  return (
    <div className={classes.content}>
      <input type="text" ref={ref}/>
      <FcSearch onClick={onSearch} className={classes.searchBtn} />
    </div>
  );
}

export default Search;
