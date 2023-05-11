/* eslint-disable react/prop-types */
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    // setCategories((prevCategories) => [inputValue, ...prevCategories]);
    setInputValue("");
  };
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </form>
  );
};
