/* eslint-disable react/prop-types */
import checkmark from "../assets/images/icon-check.svg";

export const MainList = ({ list }) => {
  const listItems = list.map((item) => (
    <li key={item}>
      <img src={checkmark} />
      <span>{item}</span>
    </li>
  ));

  return <ul> {listItems} </ul>;
};
