import { render } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("<GifItem />", () => {
  const title = "Saitama";
  const url = "giphy.com";
  test("Should match with snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
