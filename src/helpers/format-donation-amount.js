const formatDonationAmount = ({ amount, currency }) => {
  return `${currency} ${(amount - 0).toLocaleString('en-US')}`;
};

export default formatDonationAmount;
