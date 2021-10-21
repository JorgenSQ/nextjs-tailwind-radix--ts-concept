import React from "react";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";

import { blueGray, violet } from "tailwindcss/colors";
import { CheckIcon } from "@radix-ui/react-icons";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: "unset",
  backgroundColor: "white",
  width: 25,
  height: 25,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: blueGray[300] },
  "&:focus": { boxShadow: `0 0 0 1px black` },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: violet.violet11,
});

// Exports
const Checkbox = StyledCheckbox;
const CheckboxIndicator = StyledIndicator;

// Your app...
const Label = styled("label", {
  color: "white",
  fontSize: 15,
  lineHeight: 1,
  userSelect: "none",
});

export const CheckboxDemo = () => (
<div className="container  max-w-screen-lg mx-auto py-8">
  <h1 className="font-bold text-3xl text-gray-500 mb-8">TailWind</h1>
  <form className="flex rounded-xl bg-indigo-600 p-10 justify-center">
    <Checkbox defaultChecked id="c1">
      <CheckboxIndicator>
        <CheckIcon />
      </CheckboxIndicator>
    </Checkbox>
    <Label css={{ paddingLeft: 15 }} htmlFor="c1">
      Accept terms and conditions.
    </Label>
  </form>
  </div>
);

export default CheckboxDemo;
