import classes from "./Search.module.css";
import { useRef } from "react";

function Search({ setSearch }) {
  const ref = useRef();
  const onSearch = () => {
    setTimeout(() => {
      if (ref.current.value) setSearch(ref.current.value);
    }, 1000);
  };
  return (
    <div className={classes.content}>
      <input type="text" ref={ref} onChange={onSearch} />
    </div>
  );
}

export default Search;
