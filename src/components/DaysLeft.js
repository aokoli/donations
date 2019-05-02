import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.header`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  margin-bottom: 15px;
`;

export default function DaysLeft({ daysLeftText }) {
  return (
    <Container>
      Only <span>{daysLeftText}</span> days left to fund this project
    </Container>
  );
}

DaysLeft.propTypes = {
  daysLeftText: PropTypes.string.isRequired
};
