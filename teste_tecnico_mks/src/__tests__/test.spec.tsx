import { render, screen } from "@testing-library/react";
import { Header } from "../components";

describe("jest", () => {
  it("should work", () => {
    expect(1).toBe(1);
  });
  it("should header component", () => {
    render(<Header />);
  });
  screen.debug();
});
