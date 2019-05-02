// PLEASE NOTE: I ran out of time. I would have separated these into their appropriate files.

// Constants
export const ADD_DONATION = "ADD_DONATION";
export const SUBMIT_FAIL = "SET_INPUT_ERROR";

// Reducers
export function donationFormReducer(state, action) {
  switch (action.type) {
    case ADD_DONATION:
      return {
        ...state,
        totalDonations: state.totalDonations + action.value,
        numberOfDonors: state.numberOfDonors + 1,
        errorMessage: ""
      };
    case SUBMIT_FAIL:
      return { ...state, errorMessage: action.value };
    default:
      return state;
  }
}

// Validator
/**
 * Checks if an input is empty. null, undefined, empty strings,
 * qualify as empty
 * @param {*} x item to be checked for emptiness
 * @returns {boolean} true if item is empty; otherwise, false
 */
export const isEmpty = x => {
  if (x === undefined || x === null || x === "") {
    return true;
  }
};

/**
 * Validates a donation submission.
 * @param {string} donation to be validated
 * @returns {string} an error message if the donation input is invalid.
 */
export function donationFormValidator(donation) {
  if (isEmpty(donation) || Number.isNaN(donation)) {
    return "Please enter a number";
  }
  if (donation < 5) {
    return "Please donate at least $5";
  }
}

/**
 * Parses the donation string amount, and returns its number equivalent.
 * @param {string} donationAmountString
 * @returns {number} numeric equivalent of the string if valid; otherwise, null
 */
export function parseDonationString(donationAmountString) {
  return isEmpty(donationAmountString) ? null : Number(donationAmountString);
}
