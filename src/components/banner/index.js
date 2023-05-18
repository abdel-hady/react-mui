import { useTheme } from "@emotion/react";
import { Typography, useMediaQuery } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/Banner";

export const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(
    `(max-width: ${theme.breakpoints.values.md}px)`
  );
  return (
    <BannerContainer>
      <BannerImage src="/images/banner/Spider-man.png" />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">New Bages</BannerTitle>
        <BannerDescription variant="subtitle">
          Torme ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incidiunt ut labore et dolore magna so a ciritcla exammination
          obervarioni ro
        </BannerDescription>
        <BannerShopButton color="primary">Show Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
};
