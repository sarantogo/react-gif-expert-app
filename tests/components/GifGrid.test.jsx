/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("<GifGrid />", () => {
  const category = "One Punch";
  test("Should show loading when no images", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Should not show loading when useFetchImages images are loaded", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "giphy.com/Saitama",
      },
      {
        id: "123",
        title: "Goku",
        url: "giphy.com/Goku",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
