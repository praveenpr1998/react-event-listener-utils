# react-event-listener-utils

`react-event-listener-utils` is a React custom hook utility library for managing and handling custom event listeners efficiently within React applications. It enables developers to selectively listen for events on specified elements based on attributes, facilitating enhanced interactivity and data logging capabilities.

## Installation

Install `react-event-listener-utils` via npm:

> `npm install react-event-listener-utils`

## Usage

### Example

    `import React from 'react';
    import { useEffect } from 'react';
    import useCustomEventListener from 'react-event-listener-utils';

    const CustomListenerComponent = () => {
      // Callback to handle the event
      const handleShowNotification = (primaryValue, actionString, extraParams) => {
        console.log('Primary Attribute Value:', primaryValue);
        console.log('Action String:', actionString);
        console.log('Extra Params:', extraParams);
        const logObj = {
          primaryValue,
          actionString,
          ...extraParams
        };
        console.log('Log Object:', logObj);
      };

      // Handler for button click to set extra parameters
      const onButtonClick = (event) => {
        const extraParams = { test: 'test' }; // Extra params to be added
        event.target.setAttribute('data-extra-params', JSON.stringify(extraParams));
      };

      // Global error handler for the hook
      const handleError = (error) => {
        console.error('Global Error Handler:', error);
      };

      // First instance of useCustomEventListener
      useCustomEventListener({
        parentSelector: '#parent-container1', // Parent container selector
        elementTypes: ['button', 'a'], // Elements to listen for
        primaryAttribute: 'data-log-click', // Primary attribute to check for
        callback: handleShowNotification, // Callback function
        secondaryAttribute: 'data-action', // Secondary attribute to generate action string
        onError: handleError, // Global error callback
        removeExtraParamsAfterAdding: true // Remove extra params after adding
      });

      // Second instance of useCustomEventListener
      useCustomEventListener({
        parentSelector: '#parent-container2', // Another parent container selector
        elementTypes: ['button', 'a'], // Elements to listen for
        primaryAttribute: 'data-track-click', // Another primary attribute to check for
        callback: handleShowNotification, // Same callback function
        secondaryAttribute: 'data-action', // Same secondary attribute
        onError: handleError, // Same global error callback
        removeExtraParamsAfterAdding: false // Do not remove extra params after adding
      });

      return (
        <>
          <h1>Custom Event Listener Example</h1>
          <div id="parent-container1">
            <h2>Parent Container 1</h2>
            <button
              onClick={onButtonClick}
              data-log-click="button1"
              data-action="signin"
            >
              Button 1
            </button>
            <button
              onClick={onButtonClick}
              data-log-click="button2"
              data-action="add_to_cart"
            >
              Button 2
            </button>
            <button
              onClick={onButtonClick}
              data-log-click="button3"
            >
              Button 3
            </button>
          </div>
          <div id="parent-container2">
            <h2>Parent Container 2</h2>
            <button
              onClick={onButtonClick}
              data-track-click="button4"
              data-action="signup"
            >
              Button 4
            </button>
            <button
              onClick={onButtonClick}
              data-track-click="button5"
              data-action="checkout"
            >
              Button 5
            </button>
          </div>
        </>
      );
    };

    function App() {
      return (
        <div className="app">
          <CustomListenerComponent />
        </div>
      );
    }

    export default App;`

### Props Usage

| Prop                           | Description                                                                                                              | Example                  | Optional |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------ | -------- |
| `parentSelector`               | Selector for the parent element where event listeners will be attached. Defaults to `document` if not provided or found. | `'#parent-container2'`   | Optional |
| `elementTypes`                 | Array of element types (HTML tag names) to listen for events.                                                            | `['button', 'a']`        | Required |
| `primaryAttribute`             | Attribute name that must be present on elements to trigger the callback function.                                        | `'data-track-click'`     | Required |
| `callback`                     | Function to be called when an eligible element's event is triggered.                                                     | `handleShowNotification` | Required |
| `secondaryAttribute`           | Optional attribute name used to generate an action string in the callback (e.g., `'_clicked'`).                          | `'data-action'`          | Optional |
| `onError`                      | Optional global error callback function to handle errors thrown during event handling.                                   | `handleError`            | Optional |
| `removeExtraParamsAfterAdding` | Boolean flag indicating whether to remove the `data-extra-params` attribute after callback execution.                    | `false`                  | Optional |

### Contribution

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

By Order Of The Peaky Blinders.
