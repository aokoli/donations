import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BoldText from "./BoldText";

const backgroundColor = "#E3EBFC";
const Container = styled.div`
  position: relative;
  background: ${backgroundColor};
  padding: 10px;
  border-radius: 4px;
  color: #6d93ee;
  margin-bottom: 25px;

  &:after,
  &:before {
    top: 100%;
    right: 21px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  &:after {
    border-color: rgba(136, 183, 213, 0);
    border-top-color: ${backgroundColor};
    border-width: 19px;
    margin-right: 0px;
  }
  &:before {
    border-color: rgba(194, 225, 245, 0);
    border-width: 24px;
    margin-right: -5px;
  }
`;

export default function RemainingDonations({ amount }) {
  return amount === 0 ? (
    <Container> We have reached our goal! 🎉</Container>
  ) : (
    <Container>
      <BoldText>${amount}</BoldText> still needed to fund this project.
    </Container>
  );
}

RemainingDonations.propTypes = {
  amount: PropTypes.number.isRequired
};
