import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/svelte";
import Blanchor from "../Blanchor.svelte";
describe("Blanchor component", () => {
  test("should confirm render an anchor tag with href, target, and rel attributes", () => {
    const { container } = render(Blanchor, {href:"https://github.com/harryli0088/svelte-kit-template"})
    const link = container.getElementsByTagName("a")[0]
    expect(link.getAttribute("href")).toEqual("https://github.com/harryli0088/svelte-kit-template")
    expect(link.getAttribute("rel")).toEqual("noopener noreferrer")
    expect(link.getAttribute("target")).toEqual("_blank")
  });
});