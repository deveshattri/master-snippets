# React Notes: useRef()

## What is useRef()
- `useRef()` creates a **mutable object** with a `.current` property.
- The `.current` property can store **DOM elements** or **any value** that persists across renders.
- Updating `.current` **does not trigger a re-render**.

## Example: Accessing a DOM element
```jsx
import { useRef } from 'react';

function Example() {
  const inRef = useRef();

  return <input ref={inRef} />;
}
```
- `ref={inRef}` attaches the DOM element `<input>` to `inRef.current`.
- You can access it directly:
```js
inRef.current.focus(); // focuses the input
console.log(inRef.current.value); // gets the input value
```

## Other Uses of useRef()

### 1. Storing Mutable Values Across Renders
- Store values that **persist** without causing re-render.
```js
const renderCount = useRef(0);
renderCount.current += 1;
console.log(renderCount.current); // shows how many times component rendered
```

### 2. Accessing Previous State or Props
- Keep track of previous values using `useRef` + `useEffect`:
```jsx
import { useState, useEffect, useRef } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count; // store current count after render
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
```

#### Logic Behind Previous Value Tracking
- `count` is **state**, changing it triggers a **re-render**.
- `prevCount` is a **ref**, mutable and does not trigger re-render.
- `useEffect` runs **after the render**, updating `prevCount.current` for the next render.
- During render n:
  - `count` has **current value**
  - `prevCount.current` has **previous render's value**
- This is why `prevCount.current` effectively “remembers” the previous state.

#### Example Timeline
| Render | count (state) | prevCount.current (during render) | Effect updates prevCount.current after render |
|--------|---------------|----------------------------------|---------------------------------------------|
| 1      | 0             | undefined                        | prevCount.current = 0                        |
| 2      | 1             | 0                                | prevCount.current = 1                        |
| 3      | 2             | 1                                | prevCount.current = 2                        |

### 3. Timers or Intervals
- Store timer IDs to clear them later:
```js
const timerRef = useRef();
timerRef.current = setTimeout(() => { ... }, 1000);
clearTimeout(timerRef.current);
```

### 4. Avoid Recreating Objects or Functions
- Keep stable references:
```js
const stableObj = useRef({});
```
- Useful when passing objects/functions to child components to avoid unnecessary re-renders.

## Key Points
- `useRef` **does not trigger a re-render** when updated.
- Can be used for **DOM access, mutable values, previous state, timers, or stable references**.
- Using `useEffect` + `useRef` allows tracking previous state safely.
- `ref={inRef}` connects the ref object to a DOM element.

