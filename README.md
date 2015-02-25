##GroupBot

A simple Group Me Bot
[**Hosted At**](https://fast-hamlet-9749.herokuapp.com/)

###Goals

* Take Polls 
* Create Lists 
* Photo-Bomb 
* Calendar Events 

### Setup
Create a "envs/development.sh" with the following(**Update GroupMe tokens):
```
  #!/usr/bin/env bash
  __DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
  source ${__DIR}/_default.sh
  # Based on _default ---^
```

  export DEPLOY_ENV="$(basename "${BASH_SOURCE[0]}" .sh)"
  export NODE_ENV="development"
  export DEBUG=*:*

  export GROUPME_TOKEN="groupme-token-here"
  export GROUPME_CALLBACK_URL="your-callback-url-here" 
