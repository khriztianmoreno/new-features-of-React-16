# Error Handling using Error Boundaries in React 16

A JavaScript error in the UI shouldn’t break the whole application. To solve this problem React 16 introduced the new concept of an **error boundary**.

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the crashed component tree.

In this lesson we'll create an error boundary. We can use the new lifecycle hook `componentDidCatch` to handle any errors that the components we wrap throw at us, without unmounting our entire app!
