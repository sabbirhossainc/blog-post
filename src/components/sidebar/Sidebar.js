import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChanged, sortSelected } from "../../features/filter/filterSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { filterStatus, sortBy } = useSelector((state) => state.filters);

  // Local state control
  const [filteredOption, setfilteredOption] = useState(filterStatus);
  const [selectedOption, setSelectedOption] = useState(sortBy);

  // handel all selection based on user selection
  const handleChanged = (e) => {
    const { value } = e.target;
    if (e.target.type === "radio") {
      setfilteredOption(value);
      dispatch(statusChanged(value));
    } else {
      setSelectedOption(value);
      dispatch(sortSelected(value));
    }
  };

  return (
    <div>
      <aside>
        <div className="sidebar-items">
          <div className="sidebar-content">
            {/* <!-- handle sort on button click --> */}
            <h4>Sort</h4>
            <select
              name="sort"
              id="lws-sort"
              value={selectedOption}
              className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
              onChange={handleChanged}
            >
              <option value="">Default</option>
              <option value="newest">Newest</option>
              <option value="most_liked">Most Liked</option>
            </select>
          </div>
          <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
              {/* <!-- handle filter on button click --> */}
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="lws-all"
                  // defaultChecked
                  className="radio"
                  value={"All"}
                  checked={filteredOption === "All"}
                  onChange={handleChanged}
                />
                <label htmlFor="lws-all">All</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="lws-saved"
                  className="radio"
                  value={"Saved"}
                  checked={filteredOption === "Saved"}
                  onChange={handleChanged}
                />
                <label htmlFor="lws-saved">Saved</label>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
