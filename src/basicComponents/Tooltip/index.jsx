import React from "react";
import { Tooltip } from "@material-ui/core";

const TooltipComponent = (props) => { 
  const {
    title,
    children,
    withOutTooltip,
    enterDelay,
    ...rest
  } = props;

  return (
    <Tooltip
      {...rest}
      title={title}
      arrow
      placement="top"
      enterDelay={enterDelay || 300}
      disableHoverListener={withOutTooltip}
      disableFocusListener={withOutTooltip}
      disableTouchListener={withOutTooltip}
    >
      {children}
    </Tooltip>
  );
};

export default TooltipComponent;