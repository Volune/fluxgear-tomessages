function toMessage() {
  const key = String(this);
  const message = {};
  Object.defineProperties(message, {
    name: {
      value: key,
      enumerable: true,
    },
    toString: {
      value() {
        return key;
      },
    },
    toJSON: {
      value() {
        return key;
      },
    },
  });
  return message;
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
