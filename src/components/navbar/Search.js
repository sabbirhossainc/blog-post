import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { searched } from "../../features/filter/filterSlice";

export default function Search() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filters);
  const [input, setInput] = useState(search);

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleChange = (e) => {
    // e.preventDefault();
    setInput(e.target.value);
    dispatch(searched(e.target.value));

    // if user is not in home page, redirect to home page
    if (!match) {
      navigate("/");
    }
  };

  return (
    // <form>
      <input
        className="search"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={handleChange}
      />
    // </form>
  );
}
