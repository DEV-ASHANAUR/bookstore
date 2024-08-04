"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const router = useRouter();
  const modalRef = useRef();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  const onHide = () => {
    router.back();
  };

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="shadow-lg border flex flex-col p-2 rounded-md"
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer"><XMarkIcon className="w-6 h-6 text-red-700" /></span>
      {children}
    </dialog>,
    document.getElementById("modal-root-id")
  );
};

export default Modal;
