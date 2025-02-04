```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Ensure the cleanup function runs by wrapping it in a callback
    const cleanup = () => {
      console.log('Component unmounted');
    };
    console.log('Component mounted');
    return cleanup;
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```