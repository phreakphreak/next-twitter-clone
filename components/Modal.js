import { MdOutlineClose } from "react-icons/md";
const Modal = ({ toggle }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className="fixed top-0 left-0 justify-center items-start w-full flex min-h-screen  rounded-sm bg-slate-500 z-[999] bg-opacity-20">
      <div
        onClick={handleModalContainerClick}
        className="relative mt-12 p-4 bg-[#161F2B] overflow-y-auto min-h-[280px] min-w-[600px] rounded-md shadow-md "
      >
        <button onClick={toggle} className="absolute top-4 right-4">
          <MdOutlineClose size={24} color="#fff" />
        </button>
      </div>
    </article>
  );
};

export default Modal;
