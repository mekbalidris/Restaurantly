import { Link } from "react-router-dom";

export default function Access() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI2Nzd8MHwxfGFsbHwxfHx8fHx8fHwxNjk1MDc5NzYw&ixlib=rb-4.0.3&q=80&w=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>

      {/* Blur Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(1, 7, 0, 0.5)",
          filter: "blur(8px)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="flex flex-col justify-center items-center text-center h-full relative z-10">
        <div className="w-full max-w-md space-y-8 p-10 bg-secondbg bg-opacity-90 rounded-2xl shadow-2xl">
          <div className="text-center">
            <h1 className="text-golden text-4xl font-bold mb-8 font-playfair">
              Bon Appétit!
            </h1>
            <p className="text-gray-400 mb-12 text-lg text-center">
              To order, choose an option below.
            </p>
          </div>
          <div className="space-y-6">
            <Link to="/login" className="block w-full">
              <button
                className="w-full py-3 bg-golden text-mainbg 
                           rounded-full font-semibold 
                           transform transition duration-300 
                           hover:scale-105 hover:bg-opacity-90
                           focus:outline-none focus:ring-2 
                           focus:ring-golden focus:ring-opacity-50"
              >
                Login
              </button>
            </Link>

            <div className="flex items-center justify-center space-x-4 my-4">
              <div className="h-px bg-gray-700 w-full"></div>
              <span className="text-gray-500 px-2">or</span>
              <div className="h-px bg-gray-700 w-full"></div>
            </div>

            <Link to="/signup" className="block w-full">
              <button
                className="w-full py-3 border-2 border-golden 
                           text-golden bg-transparent 
                           rounded-full font-semibold 
                           transform transition duration-300 
                           hover:bg-golden hover:text-mainbg
                           focus:outline-none focus:ring-2 
                           focus:ring-golden focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
