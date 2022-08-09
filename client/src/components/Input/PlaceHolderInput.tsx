import React, { useRef, useState } from "react";
import useOutsideClick from "../../services/helpers/useHandleOutsideClick";

interface props {
  placeholder: string;
  className: string;
  type: string;
}
const PlaceHolderInput = (props: props) => {
  const [inputClassName, setInputClassName] = useState(props.className);

  const refs = useRef<HTMLDivElement | null>(null);

  const click = (event: any) => {
    placeholder.current?.classList.add("placeholder");
  };

  const { ref, placeholder } = useOutsideClick();
  if (ref.current?.value !== "") {
    placeholder.current?.classList.add("placeholder");
  }
  return (
    <div className="relative w-max rounded-[4px]" onClick={click}>
      {" "}
      <input
        className={props.className}
        onClick={click}
        ref={ref}
        type={props.type}
        onChange={click}
      />
      <div
        className="absolute top-1 left-1 text-gray-600"
        id="placeholderText"
        onMouseDown={click}
        ref={placeholder}
      >
        {props.placeholder}
      </div>
    </div>
  );
};

export default PlaceHolderInput;
