import { items } from "../data/items";
import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()} - ${now.getMonth() +1}`;
}

export const filterListByMonth = (list: Item[] , date: string) => {
  const dateSplit = date.split('-');
  const year = dateSplit[0];
  const month = dateSplit[1];
  console.log(list[1].date.getFullYear())
  const newList = list.filter(item => {
    return (
    item.date.getFullYear() === parseInt(year) &&
    item.date.getMonth() + 1 === parseInt(month)
    );
  })
  console.log(newList)
  return newList;
}

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth()}` : date.getMonth();
  const day = date.getDate()  < 10 ? `0${date.getDate()}` : date.getDate()

  return `${day}/${month}/${year}`
}