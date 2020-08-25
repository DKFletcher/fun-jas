const getShortMessages = (messages) => {
  return messages.filter(object => object.message.length < 50).map(filtered => filtered.message);
};
module.exports = getShortMessages;
