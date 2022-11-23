import { forwardRef, useId } from "react";

const ModalText = forwardRef(
  (
    {
      btn,
      btnType = "btn-ghost",
      modal,
      nobg = false,
      noclose = false,
      nomobile = false,
      clickaway = true,
      top = 0,
      btnClass = "",
      modalClass = "",
    },
    ref
  ) => {
    const id = useId();

    return (
      <>
        <label
          htmlFor={id}
          className={`btn ${btnType} ${btnClass} normal-case`}
          ref={ref}
        >
          {btn}
        </label>

        <input type="checkbox" id={id} className="modal-toggle" />
        {!clickaway ? (
          <div
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
              }`}
            >
              {!noclose && (
                <label
                  htmlFor={id}
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
              )}
              {modal}
            </div>
          </div>
        ) : (
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
              }`}
            >
              {!noclose && (
                <label
                  htmlFor={id}
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
              )}
              {modal}
            </div>
          </label>
        )}
      </>
    );
  }
);

export default ModalText;
