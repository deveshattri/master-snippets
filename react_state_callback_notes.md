# React Notes: setState & useCallback Concepts

## 1. Difference between `setCount(count + 1)` and `setCount(prev => prev + 1)`

### `setCount(count + 1)`
- Uses the **current `count` value** from the closure of the render.
- **Not safe** for multiple updates in the same render because React hasn't updated the state yet.

```js
let count = 0;
setCount(count + 1); // count is 0 → sets 1
setCount(count + 1); // count is still 0 → sets 1 again
```

### `setCount(prev => prev + 1)`
- Uses a **functional update**; React passes the **latest state** to the function.
- Safe for multiple updates in the same render.

```js
setCount(c => c + 1); // c = 0 → sets 1
setCount(c => c + 1); // c = 1 → sets 2
```

### ✅ Rule of Thumb
- Use **direct form** if new state **doesn’t depend** on previous state.
- Use **functional form** if new state **depends on previous state**.

---

## 2. Why `useCallback` still gives new values even if component does not re-render

### Scenario
```jsx
const computeSomething = useCallback(() => Math.random(), []);
```
- The **function reference** is memoized (stays the same between renders).
- But **calling the function executes it**, so `Math.random()` generates a **new random number each time**.

### Key Points
1. `React.memo` prevents child re-renders if **props reference doesn’t change**.
2. `useCallback` stabilizes the **function reference**.
3. `useCallback` **does NOT cache the return value** of the function.

### If you want a value to stay the same across renders:
```jsx
const cachedValue = useMemo(() => Math.random(), []); // value stays same
```
- `useMemo` caches the **computed value**, not the function.

---

## 3. Example: Memoized child with useCallback
```jsx
import { memo, useCallback, useState } from 'react';

export function Assignment1() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => setCount(c => c + 1), []);
  const handleDecrement = useCallback(() => setCount(c => c - 1), []);

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
}

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
));
```

### Behavior
- `CounterButtons` is wrapped in `React.memo` → **re-renders only if props change**.
- `handleIncrement` and `handleDecrement` are memoized with `useCallback([])` → **function references never change**.
- Clicking Increment/Decrement updates `count` → parent re-renders, but **`CounterButtons` does NOT re-render**.

### ✅ Key Takeaway
- `useCallback` prevents unnecessary re-renders of memoized children.
- Functional updates (`setCount(c => c + 1)`) ensure the state is always correct even if multiple updates occur.

