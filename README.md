# clnames

![Latest Version](https://img.shields.io/github/v/tag/jornatf/clnames?label=version&style=flat-square)
[![Licence](https://img.shields.io/github/license/jornatf/clnames?label=license&style=flat-square)](LICENCE.md)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/jornatf/clnames/run-tests.yml?branch=master&label=test&style=flat-square)](https://github.com/jornatf/clnames/actions?query=workflow%3Arun-tests+branch%3Amaster)
[![Downloads](https://img.shields.io/npm/dt/clnames?label=downloads&style=flat-square)](https://www.npmjs.com/package/clnames)

**clnames** is a [NPM Package](https://www.npmjs.com/package/clnames) to concat simple and conditional classnames in your JavaScript project.

## Installation

```bash
# In your terminal, enter command:
npm install clnames
```

### Usage

```javascript
import clnames from "clnames";

clnames(...classes);
```

Arguments `classes` must be a `string` or an `object`.

See example with [React](https://react.dev/), below:

```javascript
import { useState } from "react";
import clnames from "clnames";

const App = () => {
  const [color, setColor] = useState("blue");

  //...

  return (
    <div className="App">
      <div
        className={clnames(
          "font-bold",
          {
            "text-blue-500": color === "blue",
            "text-red-300": color === "red",
          } /*...*/
        )}
      >
        Hello, I'm {color}
      </div>
    </div>
  );
};

export default App;
```

## Contributing

If you are interested in this project and want to improve it, fix errors or bugs, **you're welcome to contribute**.

## Credits

- [Jordan Nataf](https://github.com/jornatf)
- [All Contributors](../../contributors)

## Licence

The MIT License (MIT).

> [!Note]
> Please see [License File](LICENSE.md) for more information.
