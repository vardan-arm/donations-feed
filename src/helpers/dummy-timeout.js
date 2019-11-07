const dummyTimeout = async ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export default dummyTimeout;
