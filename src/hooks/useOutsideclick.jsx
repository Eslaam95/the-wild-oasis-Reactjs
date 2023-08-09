import { useEffect, useRef } from "react";

export default function useOutsieClick(handler, listenCapture = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleModalClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleModalClick, listenCapture);

      return () => {
        document.removeEventListener("click", handleModalClick, listenCapture);
      };
    },
    [handler, listenCapture]
  );

  return ref;
}
