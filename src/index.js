function toMessage() {
  const key = String(this);
  return {
    toString() {
      return key;
    },
    toJSON() {
      return key;
    },
  };
}

function toMessages() {
  const messages = {};
  this.forEach((key) => {
    messages[key] = toMessage.call(key);
  });
  return messages;
}

export { toMessage, toMessages };
export default toMessages;
