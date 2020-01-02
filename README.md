# React Calendar Icon Badge

A date badge component in the shape of a familiar calendar icon with support for theming and localization.


[Demo](https://react-calendar-icon-demo.now.sh)

```
npm install --save react-calendar-icon
```

[![Build Status](https://travis-ci.org/kkostov/react-calendar-icon.svg?branch=master)](https://travis-ci.org/kkostov/react-calendar-icon)

# Usage

```jsx
import React from "react";
import CalendarIcon from "react-calendar-icon";

export default function App(props) {
  return (
    <div>
      {/* ...  */}
      <CalendarIcon date={new Date()} />
    </div>
  );
}
```

# Date formatting

The `CalendarIcon` component takes an optional prop `options` which can be used to adjust the way the date parts will be formatted. By default, the following configuration is used:

```js
{
  header: { weekday: "long" },
  footer: { month: "long" },
  value: { day: "2-digit" },
  locale: []
}
```

The values for the `header`, `footer` and `value` sections of the icon are objects passed to ([Date.prototype.toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString))


```jsx
import React from "react";
import CalendarIcon from "react-calendar-icon";

const dateOptions = {
  header: { weekday: "long" },
  footer: { month: "short" },
  value: { day: "2-digit" },
  locale: "nl"
};

export default function App(props) {
  return (
    <div>
      {/* ...  */}
      <CalendarIcon date={new Date()} options={dateOptions} />
    </div>
  );
}
```

# Theming

It is possible to customize the look-and-feel of the icon by using a `ThemeProvider` component from `styled-components`. Add a `calendarIcon` member with the following attributes:

```jsx
import React from "react";
import CalendarIcon from "react-calendar-icon";
import { ThemeProvider } from "styled-components";

const theme = {
  calendarIcon: {
    textColor: "white", // text color of the header and footer
    primaryColor: "#0da472", // background of the header and footer
    backgroundColor: "#fafafa"
  }
};

export default function App(props) {
  return (
    <ThemeProvider theme={theme}>
      {/* ...  */}
      <CalendarIcon date={new Date()} />
    </ThemeProvider>
  );
}
```

# License

MIT
