import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../../theme/theme";

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Helmet>
  );
};
