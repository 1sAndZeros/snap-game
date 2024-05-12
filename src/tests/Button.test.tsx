import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

// Component imports
import { Button } from "@/components";

describe("Test Button", () => {
  it("renders correctly", () => {
    render(<Button text="Hello" />);
    screen.getByRole("button", { name: "Hello" });
  });
});
