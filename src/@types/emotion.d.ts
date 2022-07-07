import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    palette: {
      primary: {
        main: string;
        light: string;
      };
      darkBlue: {
        main: string;
      };
      grayishBlue: {
        light: string;
        main: string;
        dark: string;
      };
    };
    typography: {
      fontFamily: string;
    };
  }
}
