import { useState, useEffect } from "react";

export const useDisplaySize = () => {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return width > 600 ? "lg" : "sm";
};
