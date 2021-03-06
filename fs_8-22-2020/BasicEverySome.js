const checkUsersValid = (goodUsers) => {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every((submitted) =>
      goodUsers.some((good) => good === submitted)
    );
  };
};
module.exports = checkUsersValid;
