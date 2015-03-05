# nanybar

Control [AnyBar](https://github.com/tonsky/AnyBar) from the command line or from your javascript code

## Install

The usual :
```
npm install nanybar -g
```

## Usage

From the command line :

```
nanybar red
```

Or if AnyBar is on another port :

```
nanybar yellow 1025
```

Or use it as a library :
```javascript

var nanybar = require('nanybar');

nanybar('red');
nanybar('yellow', 1025);
```

## License

[MIT](http://rumpl.mit-license.org)
