import { useId } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function ModalIcon({
  btn,
  modal,
  nobg = false,
  noclose = false,
  nomobile = false,
  fullHeight = false,
  top = 0,
  btnClass = "",
  modalClass = "",
}) {
  const id = useId();
  return (
    <>
      <label htmlFor={id} className={`btn btn-ghost btn-circle ${btnClass}`}>
        {btn}
      </label>

      <input type="checkbox" id={id} className="modal-toggle" />
      <label
        htmlFor={id}
        className={`modal ${
          !nomobile && "modal-bottom sm:modal-middle"
        } ${modalClass}`}
        style={{
          top,
        }}
      >
        <div
          className={`modal-box sm:max-h-[80vh] ${
            nobg && "bg-transparent p-0"
          } ${fullHeight && "h-full"}`}
        >
          {!noclose && (
            <label
              htmlFor={id}
              className="btn btn-sm btn-ghost btn-circle absolute left-2 top-2"
            >
              <AiOutlineClose size={18} />
            </label>
          )}
          {modal}
        </div>
      </label>
    </>
  );
}
