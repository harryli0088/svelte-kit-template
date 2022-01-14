import '@testing-library/jest-dom';
import { render } from "@testing-library/svelte";
import Blanchor from "../Blanchor.svelte";
describe("Blanchor component", () => {
  test("should confirm render an anchor tag with href, target, and rel attributes", () => {
    const { container } = render(Blanchor, {href:"https://github.com/harryli0088/svelte-kit-template"})
    // expect(container).toContainElement(document.createElement("a"))
  });
});