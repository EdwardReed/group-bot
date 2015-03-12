##GroupBot

A simple [**Group Me Bot**](https://fast-hamlet-9749.herokuapp.com/).

###Goals

* Take Polls 
* Create Lists 
* Photo-Bomb 
* Calendar Events 

### Setup
Create a "envs/development.sh" with the following:
```
  #!/usr/bin/env bash
  __DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
  source ${__DIR}/_default.sh
  # Based on _default ---^

  export DEPLOY_ENV="$(basename "${BASH_SOURCE[0]}" .sh)"
  export NODE_ENV="development"
  export DEBUG=*:*

  export GROUPME_TOKEN="groupme-token-here" // Update Token
  export GROUPME_CALLBACK_URL="your-callback-url-here" //Update Callback-Url
```
Run:
```
npm install
npm update
```
To start node server run:
```
npm start
```
### Righto!
See [**Fancy GroupMe API wrapper**](https://github.com/cmcavoy/fancy-groupme-bot) and [**GroupMe API**](https://dev.groupme.com/docs/v3) to get started developing.
