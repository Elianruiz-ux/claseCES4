import { useEffect, useState } from "react";

const LifeCycle = () => {
  const [cont1, setCont1] = useState(0);
  const [cont2, setCont2] = useState(0);

  useEffect(() => {
    // setCont1(cont1 + 1);
    // setCont2(cont2 + 1);
    // console.log(cont1);
    // console.log(cont2);
  }, [cont1, cont2]);

  return (
    <div>
      <h2>lifecycle</h2>
      <p>count 1: {cont1}</p>
      <p>count 2: {cont2}</p>
      <button onClick={() => setCont1(cont1 + 1)}>contar +1</button>
      <button onClick={() => setCont2(cont2 + 1)}>contar +2</button>
    </div>
  );
};

export default LifeCycle;
