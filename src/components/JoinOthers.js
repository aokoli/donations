import React from "react";
import styled from "styled-components";
import BoldText from "./BoldText";
import PropTypes from "prop-types";

const Container = styled.div`
  margin-bottom: 15px;
`;

export default function JoinOthers({ numberOfDonors }) {
  const isSingleDonor = numberOfDonors === 1;

  return numberOfDonors === 0 ? (
    <Container>Be the first to donate!</Container>
  ) : (
    <Container>
      Join the <BoldText>{numberOfDonors}</BoldText> other{" "}
      {isSingleDonor ? "donor" : "donors"} who {isSingleDonor ? "has" : "have"}{" "}
      already supported this project.
    </Container>
  );
}

JoinOthers.propTypes = {
  numberOfDonors: PropTypes.number.isRequired
};
