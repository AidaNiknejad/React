import { useState } from "react";
const TopComponent = () => {
  const [state, setState] = useState();

  return (
    <div>
      <MiddleComponent state={state} />
    </div>
  );
};
const MiddleComponent = (state) => {
  return <BottomComponent state={state} />;
};
const BottomComponent = (state) => {
  return <div>{state}</div>;
};
