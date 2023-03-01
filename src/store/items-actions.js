import { fetchItems } from './items-slice';
import database_URL from '../Helpers/databaseURL';

export const fetchItemsFromDatabase = () => async (dispatch) => {
  try {
    const response = await fetch(database_URL);
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    const data = await response.json();
    const loadedItems = Object.entries(data).reduce((acc, [id, item]) => {
      acc.push({ id, ...item });
      return acc;
    }, []);

    dispatch(fetchItems(loadedItems));
  } catch (error) {
    console.error(error);
  }
};
