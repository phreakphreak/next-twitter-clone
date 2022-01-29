export default function Timeline({ userName }) {
  return (
    <div className="bg-gradient-to-r  rounded-sm from-sky-500 to-violet-900 grid items-center">
      <h1 className="text-white text-4xl"> {userName}</h1>
    </div>
  );
}

Timeline.getInitialProps = async function () {
  return {
    userName: "phreakphreak",
  };
};
