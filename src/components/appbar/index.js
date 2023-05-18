import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { AppbarMobile } from "./appbarMobile";
import { AppbarDesktop } from "./appbarDesktop";

export default function Appbar() {
  const theme = useTheme();
  const matches = useMediaQuery(
    `(max-width: ${theme.breakpoints.values.md}px)`
  );
  return (
    <>
      {matches ? (
        <AppbarMobile matches={matches} />
      ) : (
        <AppbarDesktop matches={matches} />
      )}
    </>
  );
}
