import React from "react";
import styled from "@emotion/styled";
import "./App.css";

function App() {
  return (
    <StyledHeader className="App">
      <header className="App-header">
        <p>Welcome</p>
      </header>
    </StyledHeader>
  );
}

const StyledHeader = styled("header")({
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  fontSize: "calc(10px + 2vmin)",
});
export default App;
