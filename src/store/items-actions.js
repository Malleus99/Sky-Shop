import { getItems } from './items-slice';
import database_URL from '../Helpers/databaseURL';

export const fetchItems = () => async (dispatch) => {
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

    dispatch(getItems(loadedItems));
  } catch (error) {
    console.error(error);
  }
};
