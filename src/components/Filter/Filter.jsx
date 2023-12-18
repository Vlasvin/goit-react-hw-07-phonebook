import { FilterLabel, FilterInput } from "components/Filter/Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector((state) => state.filter.value);
  const changeFilter = (e) => {
    dispatch(setFilter(e.currentTarget.value.trim()));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={filterName}
        onChange={changeFilter}
      ></FilterInput>
      {/* <button type="button" onClick={handleClick}>
        Fetch
      </button> */}
    </FilterLabel>
  );
};
