import { createContext } from 'react';

const FilterContext = createContext({
  characters: [],
  filteredCharacters: [],
  filterValue: '',
  setFilterObject: () => {}
});

export default FilterContext;
