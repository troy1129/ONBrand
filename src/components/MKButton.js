import { forwardRef } from "react";
import { Button } from "@mui/material";

const MKButton = forwardRef(({ children, ...rest }, ref) => (
  <Button {...rest} ref={ref}>
    {children}
  </Button>
));

MKButton.displayName = "MKButton";

export default MKButton; 