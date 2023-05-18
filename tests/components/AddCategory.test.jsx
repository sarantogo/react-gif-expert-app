/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe("<AddCategory />", () => {
  test("Should change value in text input", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Saitama" } });
    screen.debug();
    expect(input.value).toBe("Saitama");
  });

  test("Should call onNewCategory if input has a value", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("Should not call onNewCategory if input is void", () => {
    const inputValue = "";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
