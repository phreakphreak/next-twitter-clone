export default function Timeline({ userName }) {
  return (
    <div className="bg-gradient-to-r  rounded-sm from-sky-500 h-1/2 w-1/2 to-pink-600 flex py-6 mx-6 mt-4 ">
      <h1 className="text-white text-4xl"> {userName}</h1>
    </div>
  );
}

Timeline.getInitialProps = function () {
  return {
    userName: "phreakphreak",
  };
};
