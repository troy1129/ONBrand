import { forwardRef } from "react";
import { Box } from "@mui/material";

const MKBox = forwardRef(({ children, ...rest }, ref) => (
  <Box {...rest} ref={ref}>
    {children}
  </Box>
));

MKBox.displayName = "MKBox";

export default MKBox; 