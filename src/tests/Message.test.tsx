import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

// Component imports
import { Message } from "@/components";

describe("Test Message", () => {
  it("renders correctly", () => {
    render(<Message>Hello World</Message>);
    const message = screen.getByRole("paragraph");
    expect(message).toHaveTextContent("Hello World");
  });
});
