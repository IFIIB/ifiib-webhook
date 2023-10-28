# Ifiib webhook

## Install
```bash
npm install @ifiib/webhook
```
## Usage
### commonjs import
```js
const webhook = require("@ifiib/webhook")

var hook = new webhook.Client("<Webhook url>")
```
### Es6 import
```js
import { Client } from '@ifiib'

var hook = new Client("<Webhook url>")
```

## Webhook appearence

### Username
```js
hook.setUsername("HelloHook")
```
### Avatar
```js
hook.setAvatar("<Avatar url>")
```

## Sending messages
```js
hook.send({
    "content": "Hello world !"
})
```

## Embeds
```js
hook.send({
    "content": "Hello world !"
    "embeds": [
        {
            "title": "My awesome embed !",
            "description": "Interesting description"
        }
    ]
})
```

# Limitations

**Embeds**<br> 
    10 embeds per message

**Messages**<br>
    4000 character per message

