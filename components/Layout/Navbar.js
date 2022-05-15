import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-slate-500 w-screen border-2 border-pink-500 h-20 flex flex-row justify-between items-center">
      <div className="bg-white w-1/3 items-self-start">image</div>
      <div className="bg-white w-1/3 h-full items-center justify-center text-center">
        <Image width="150" height="100" src="/assets/img/logo.png" alt="logo" />
      </div>
      <div className="bg-white w-1/3 items-self-end">
        <div className="bg-purple-300 justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
