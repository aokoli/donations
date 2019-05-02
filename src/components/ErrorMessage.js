import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  color: red;
`;

export default function ErrorMessage({ error }) {
  return <Container>{error}</Container>;
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired
};
