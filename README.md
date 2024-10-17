# react-event-listener-utils

`react-event-listener-utils` is a React custom hook utility library for managing and handling custom event listeners efficiently within React applications. It enables developers to selectively listen for events on specified elements based on attributes, facilitating enhanced interactivity and data logging capabilities.

## Installation

Install `react-event-listener-utils` via npm :

```bash
 npm install react-event-listener-utils
```

## Demo

![Alt Text](https://raw.githubusercontent.com/praveenpr1998/assetsfolder/main/demo.gif)

## Usage/Example

```javascript
import useCustomEventListener from "react-event-listener-utils";

useCustomEventListener({
  parentSelector: "#parent-container1", // Parent container selector
  elementTypes: ["button", "a"], // Elements to listen for
  primaryAttribute: "data-log-click", // Primary attribute to check for
  callback: handleShowNotification, // Callback function
  secondaryAttribute: "data-action", // Secondary attribute to generate action string
  onError: handleError, // Global error callback
  removeExtraParamsAfterAdding: true, // Remove extra params after adding
});
```

useCustomEventListener - To have a better use of this hook call this hook at the starting file of your application.

To know more about the props you can refer the props details at the bottom.

## Props Usage

| Prop                           | Description                                                                                                              | Example                  | Optional |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------ | -------- |
| `parentSelector`               | Selector for the parent element where event listeners will be attached. Defaults to `document` if not provided or found. | `'#parent-container2'`   | Optional |
| `elementTypes`                 | Array of element types (HTML tag names) to listen for events.                                                            | `['button', 'a']`        | Required |
| `primaryAttribute`             | Attribute name that must be present on elements to trigger the callback function.                                        | `'data-track-click'`     | Required |
| `callback`                     | Function to be called when an eligible element's event is triggered.                                                     | `handleShowNotification` | Required |
| `secondaryAttribute`           | Optional attribute name used to generate an action string in the callback (e.g., `'_clicked'`).                          | `'data-action'`          | Optional |
| `onError`                      | Optional global error callback function to handle errors thrown during event handling.                                   | `handleError`            | Optional |
| `removeExtraParamsAfterAdding` | Boolean flag indicating whether to remove the `data-extra-params` attribute after callback execution.                    | `false`                  | Optional |

## Feedback

If you have any feedback, please reach out to me at praveenpr1998@gmail.com

### Contribution

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

By Order of the Peaky Blinders!
