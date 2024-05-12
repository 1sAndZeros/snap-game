import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

// Component imports
import { Header } from "@/components";

describe("Test Message", () => {
  it("renders correctly", () => {
    render(<Header title="SNAP" />);
    screen.getByRole("heading", { level: 2, name: "SNAP" });
  });
});
