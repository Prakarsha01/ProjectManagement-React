import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({children, buttonCaption}, ref){

    const dialog = useRef();

    useImperativeHandle(ref, ()=>{
        return{
            open(){
            dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className="p-8 text-xl rounded-2xl border-2 border-red-400" >
            {children}
            <form method="dialog">
                <button className="mt-4 p-1 text-white rounded-lg bg-stone-400 hover:bg-stone-500">{buttonCaption}</button>
            </form>
        </dialog>, 
        document.getElementById("modal-root")
    );
});

export default Modal;