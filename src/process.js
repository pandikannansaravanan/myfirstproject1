import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import User from "./newuser.js";

export default function Process() {
  return (
    <div className="App">
      <b>Student management system</b>
      <div class="box">
        <input type="text" name="" placeholder="Search.." />
        <span className="search">
          <SearchIcon />
        </span>
      </div>
      <button>Add</button>
      <User />
    </div>
  );
}
