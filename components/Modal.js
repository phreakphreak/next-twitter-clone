import { MdOutlineClose } from "react-icons/md";

const Modal = ({ children, toggle, width, height }) => {
  return (
    <article className="fixed top-0 left-0 justify-center items-start w-full flex min-h-screen  rounded-sm bg-slate-500 z-[999] bg-opacity-20">
      <div
        className={`mt-12 bg-black overflow-y-auto  ${width}  ${height} rounded-2xl shadow-md grid grid-rows-[50px,1fr] `}
      >
        <header className="relative flex items-center justify-start row-span-1 px-4 ">
          <button
            onClick={toggle}
            className="absolute flex items-center justify-center flex-initial rounded-full top-2 left-2 hover:bg-neutral-900 w-9 h-9 "
          >
            <MdOutlineClose size={21} color="#fff" />
          </button>
        </header>
        {children}
      </div>
    </article>
  );
};

export default Modal;
