import { forwardRef } from "react";
import { Typography } from "@mui/material";

const MKTypography = forwardRef(({ children, ...rest }, ref) => (
  <Typography {...rest} ref={ref}>
    {children}
  </Typography>
));

MKTypography.displayName = "MKTypography";

export default MKTypography; 