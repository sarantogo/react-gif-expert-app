/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("<GifExpertApp />", () => {
  test("Should show images of initial category", async () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "Dragon Ball" } });
    fireEvent.submit(form);
    expect(screen.getByText("Dragon Ball"));
    screen.debug();
  });
});
