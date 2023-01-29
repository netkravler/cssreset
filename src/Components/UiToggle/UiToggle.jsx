import React from "react";
import { StyledUiToggle } from "./Uitoggle.Styled";

const UiToggle = ({ id, checked, onChange }) => {
  return (
    <StyledUiToggle>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>
        <div></div>
      </label>
    </StyledUiToggle>
  );
};

export default UiToggle;
