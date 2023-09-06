import { useState } from "react";

function Views() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Me gusta</button>
      <button onClick={() => setCount(count - 1)} disabled={count <= 0}>
        No me gusta
      </button>
      <div>Likes: {count <= 0 ? 0 : count}</div>
    </div>
  );
}

export default Views;
