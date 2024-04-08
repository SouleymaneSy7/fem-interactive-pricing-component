/* eslint-disable react/prop-types */
import checkmark from "../assets/images/icon-check.svg";

export const MainList = ({ list }) => {
  const listItems = list.map((item) => (
    <li key={item}>
      <img src={checkmark} alt="Check mark icons" className="card__list__img" />
      <span className="card__list__text">{item}</span>
    </li>
  ));

  return <ul className="card__list">{listItems}</ul>;
};
