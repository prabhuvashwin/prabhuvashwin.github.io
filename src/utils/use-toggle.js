import { useState } from "react";

const useToggle = startingValue => {
  const [value, setValue] = useState(startingValue);
  const toggleValue = () => setValue(val => !val);

  return [value, toggleValue, setValue];
};

export default useToggle;
