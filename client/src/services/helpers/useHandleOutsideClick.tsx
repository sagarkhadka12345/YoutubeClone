import React from "react";

const useOutsideClick = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  const placeholder = React.useRef<any>();

  React.useEffect(() => {
    const handleClick = (event: any) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        ref.current.value === ""
      ) {
        placeholder.current?.classList.remove("placeholder");
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, placeholder]);

  return { ref, placeholder };
};
export default useOutsideClick;
