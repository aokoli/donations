import React, { useReducer } from "react";
import styled from "styled-components";
import Card from "./Card";
import DaysLeft from "./DaysLeft";
import JoinOthers from "./JoinOthers";
import RemainingDonations from "./RemainingDonations";
import {
  ADD_DONATION,
  SUBMIT_FAIL,
  isEmpty,
  donationFormValidator,
  donationFormReducer,
  parseDonationString
} from "./utils";
import ErrorMessage from "./ErrorMessage";
import DonationProgressBar from "./DonationProgressBar";

// Some initialState properties should be dynamic. I just used placeholders for this exercise.
const initialState = {
  daysLeftText: "four", // placeholder
  numberOfDonors: 0,
  totalDonations: 0,
  donationGoal: 5000,
  errorMessage: ""
};

// Styled Components
const Container = styled.div`
  font-family: "IBM Plex Sans", sans-serif;
  margin: 0 auto;
`;

const InputButtonGroup = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const Input = styled.input`
  font-weight: 700;
  font-size: 22px;
  padding-left: 15px;
  border: 1px solid #f2f2f2;
  background-color: transparent;
  color: #66615b;
  height: 50px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;
const DonateButton = styled.button`
  background-color: #19cca3;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding-right: 10px;
  padding-left: 10px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`;

export default function DonationForm() {
  const [donationFormState, dispatch] = useReducer(
    donationFormReducer,
    initialState
  );
  const {
    errorMessage,
    totalDonations,
    donationGoal,
    numberOfDonors,
    daysLeftText
  } = donationFormState;

  // Derived state
  let remainingDonation = donationGoal - totalDonations;
  remainingDonation = remainingDonation > 0 ? remainingDonation : 0;
  const donationPercentage =
    remainingDonation === 0 ? 100 : (totalDonations / donationGoal) * 100;

  // Handle user's donation submission
  const handleDonationSubmit = e => {
    e.preventDefault();
    const donationAmount = parseDonationString(
      e.target.elements.donationInput.value
    );
    const errorMessage = donationFormValidator(donationAmount);
    const isValidDonation = !errorMessage;

    if (isValidDonation) {
      dispatch({ type: ADD_DONATION, value: donationAmount });
    } else {
      dispatch({ type: SUBMIT_FAIL, value: errorMessage });
    }
  };

  return (
    <Container>
      <RemainingDonations amount={remainingDonation} />
      <DonationProgressBar donationPercentage={donationPercentage} />
      <Card>
        <DaysLeft daysLeftText={daysLeftText} />
        <JoinOthers numberOfDonors={numberOfDonors} />
        <form onSubmit={handleDonationSubmit}>
          <InputButtonGroup>
            <label htmlFor="donationInput" />
            <Input
              type="text"
              id="donationInput"
              htmlFor="donationInput"
              name="donationInput"
            />
            <DonateButton type="submit" disabled={remainingDonation === 0}>
              Give Now
            </DonateButton>
          </InputButtonGroup>
          {isEmpty(errorMessage) ? null : <ErrorMessage error={errorMessage} />}
        </form>
      </Card>
    </Container>
  );
}
