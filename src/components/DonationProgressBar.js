import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const borderRadius = "10px";
const Container = styled.div`
  border-radius: 2px;
  width: 100%;
  height: 20px;
  background: #b7f2e4;
  border-top-right-radius: ${borderRadius};
  border-top-left-radius: ${borderRadius};
`;
const DonationLevel = styled.div`
  border-top-right-radius: ${props =>
    props.donationPercentage >= 100 ? borderRadius : 0};
  border-top-left-radius: ${borderRadius};
  width: ${props => props.donationPercentage}%;
  background: #19cca3;
  height: inherit;
`;

export default function DonationProgressBar({ donationPercentage }) {
  return (
    <Container>
      <DonationLevel donationPercentage={donationPercentage} />
    </Container>
  );
}

DonationProgressBar.propTypes = {
  donationPercentage: PropTypes.number.isRequired
};
