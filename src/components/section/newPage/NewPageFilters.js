import FilterLayout from '../generalUtilities/filter/FilterLayout';
import FilterName from '../generalUtilities/filter/FilterName';
import CategoriesFilter from '../generalUtilities/filter/filterTypes/CategoriesFilter';

const NewPageFilter = ({ data, updateState }) => {
  return (
    <FilterLayout>
      <CategoriesFilter
        title='categories'
        data={data}
        updateState={updateState}
        isOpen={true}
      />
      <FilterName title='sub-category' isOpen={false}></FilterName>
    </FilterLayout>
  );
};

export default NewPageFilter;
