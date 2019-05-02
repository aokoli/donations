import React from "react";
import styled from "styled-components";
import DonationForm from "./components/DonationForm";

const Container = styled.div`
  width: 460px;
  margin: 5% auto;
`;

function App() {
  return (
    <Container>
      <DonationForm />
    </Container>
  );
}

export default App;
