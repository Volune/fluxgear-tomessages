import expect from 'must';
import toMessages, { toMessage } from '../src';

describe('toMessages', () => {
  it('transform messages array to dictionary', () => {
    const messages = ['HELLO', 'WORLD']::toMessages();
    expect(messages).to.be.an.object();
    expect(Object.keys(messages).sort()).to.eql(['HELLO', 'WORLD']);
    expect(messages.HELLO).to.be.truthy();
    expect(messages.WORLD).to.be.truthy();
    expect(messages.HELLO).not.to.eql(messages.WORLD);
  });
  it('doesn\'t fail with empty array', () => {
    const messages = []::toMessages();
    expect(messages).to.be.an.object();
    expect(Object.keys(messages)).to.eql([]);
  });
});
describe('toMessage', () => {
  it('trasnform distinguishable messages with same name', () => {
    const messageName = 'MESSAGE';
    const message1 = messageName::toMessage();
    const message2 = messageName::toMessage();
    expect(message1).not.to.equal(message2);
    expect(message1).not.to.eql(message2);
  });
});
describe('message', () => {
  const message = 'MESSAGE'::toMessage();
  it('toString() implemented', () => {
    expect(message.toString()).to.equal('MESSAGE');
  });
  it('is serializable', () => {
    expect(JSON.stringify(message)).to.equal('"MESSAGE"');
  });
});
