import Modal from "./Modal";
import TweetSection from "./TweetSection";
import { useModal } from "../hooks";

const TweetButtonHeader = () => {
  const [isOpen, toggle] = useModal();

  return (
    <>
      <button
        onClick={toggle}
        className="w-full h-[50px] mt-8 text-white rounded-full bg-sky-500"
      >
        Tweet
      </button>
      {isOpen && (
        <Modal toggle={toggle} width="min-w-[600px]" height="min-h-[280px]">
          <TweetSection />
        </Modal>
      )}
    </>
  );
};

export default TweetButtonHeader;
