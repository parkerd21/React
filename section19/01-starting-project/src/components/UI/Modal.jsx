import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

export default function Modal({ children, open, className = ''}) {

  const dialogRef = useRef()

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    }
    else {
      dialogRef.current.close();
    }
  }, [open]);
  return createPortal(
    <dialog className={`modal ${className}`} ref={dialogRef}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
