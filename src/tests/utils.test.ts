import { checkMatch } from "@/utils";
import {
  twoOfHearts,
  fiveOfSpades,
  nineOfSpades,
  fiveOfDiamonds,
} from "./mocks/cards";

describe("Test check match function", () => {
  it("returns null when value and suit do not match", () => {
    expect(
      checkMatch(
        [twoOfHearts, fiveOfSpades],
        { suit: 0, value: 0 },
        () => undefined,
      ),
    ).toBeNull;
  });

  it("returns VALUE when values match", () => {
    expect(
      checkMatch(
        [fiveOfDiamonds, fiveOfSpades],
        { suit: 0, value: 0 },
        () => undefined,
      ),
    ).toBe("VALUE");
  });

  it("returns SUIT when suits match", () => {
    expect(
      checkMatch(
        [nineOfSpades, fiveOfSpades],
        { suit: 0, value: 0 },
        () => undefined,
      ),
    ).toBe("SUIT");
  });
});
