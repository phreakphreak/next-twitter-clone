import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-[#161F2B] overflow-hidden grid grid-cols-[600px,1fr,1fr]">
      <Header />
      <main className="col-span-2">{children}</main>
    </div>
  );
};

export default AppLayout;
