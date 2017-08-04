# React Calendar Icon Badge
A customizable date badge component in the shape of a familiar calendar icon

# Todo

Title of the project
Brief description
How to get the project running locally
Running the linter
Running the test suite
How to contribute
Steps to submit a PR
How to raise issues
A link to the Code of Conduct
A changelog


rollup config

# Configuration

You can customize the look-and-feel of the icon using a `ThemeProvider` component from `styled-components`. Add a `calendarIcon` member with the following attributes:

```
const theme = {
  calendarIcon: {
    textColor: "white", // text color of the header and footer
    primaryColor: "#e85650", // used as background of the header and footer
    backgroundColor: "#fafafa", // used as background of the main 
  },
  ...
}
```
