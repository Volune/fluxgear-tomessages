# `fluxgear-tomessages`

Transform a list of messages to a dictionary of distinguishable message objects

Part of the `fluxgear` project

## Example

```
import toMessages from 'fluxgear-tomessages';

const MESSAGES = [
  'A_MESSAGE',
  'ANOTHER_MESSAGE',
]::toMessages();
```

Without the `transform-function-bind` babel plugin:

```
import toMessages from 'fluxgear-tomessages';

const MESSAGES = toMessages.call([
  'A_MESSAGE',
  'ANOTHER_MESSAGE',
]);
```
