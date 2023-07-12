import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()} - ${now.getMonth() +1}`;
}

export const filterListByMonth = (list: Item[] , date: string) => {
  const dateSplit = date.split('-');
  const year = dateSplit[0];
  const month = dateSplit[1];

  const newList = list.filter(item => {
    item.date.getFullYear() === parseInt(year) &&
    item.date.getMonth() + 1 === parseInt(month)
  })
  return newList;
}