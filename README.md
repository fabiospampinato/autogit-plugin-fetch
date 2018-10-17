# Autogit Plugin - Fetch

A plugin for fetching from a remote.

## Install

```sh
npm install --save autogit-plugin-fetch
```

## Usage

#### Options

This plugin uses the following options object:

```js
{
  remote: 'origin', // The remote to fetch from
  branch: '' // The branch to fetch from, if not set the current branch will be used
}
```

#### Configuration

Add this plugin to a command:

```js
const fetch = require ( 'autogit-plugin-fetch' );

module.exports = {
  commands: {
    'my-command': [
      fetch ({ /* YOUR OPTIONS */ })
    ]
  }
}
```

## License

MIT © Fabio Spampinato
