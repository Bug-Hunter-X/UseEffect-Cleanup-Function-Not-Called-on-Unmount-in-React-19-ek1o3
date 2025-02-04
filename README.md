# React 19 useEffect Cleanup Issue

This repository demonstrates a problem with the useEffect cleanup function not being called when a component unmounts in React 19.  The example uses a simple counter component, and the cleanup function logs a message to the console when the component is unmounted.  However, in some scenarios, this message may not appear.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console logs when mounting and unmounting the component.  The expected behavior is to see both mount and unmount messages.  However, it's inconsistent whether the unmount logs are always seen.

## Potential Causes

The issue might stem from unexpected component re-renders or other lifecycle events interfering with the cleanup process.

## Solution

The solution is provided in `bugSolution.js` and involves double checking React version and ensuring proper lifecycle management.