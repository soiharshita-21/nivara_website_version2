import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator input behavior", () => {
  it("keeps the typed rate value while editing and clamps it on blur", () => {
    render(<Calculator />);

    const rateInput = screen.getByLabelText("Interest rate");

    fireEvent.change(rateInput, { target: { value: "9" } });
    expect(rateInput.value).toBe("9");

    fireEvent.blur(rateInput);
    expect(rateInput.value).toBe("11");
  });
});
