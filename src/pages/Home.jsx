import home_bg from '../assets/bg/home_bg.jpg';

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${home_bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
          position: 'relative',
        }}
      >
        {/*overlay for the background*/}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: `rgba(0, 0, 0, 0.6)`,
            zIndex: 1,
          }}
        />

        <div
          className="flex flex-col justify-center items-center text-center z-10 relative h-full"
        >
          <h1 className="text-white text-4xl font-bold mb-4">
            Welcome To{' '}
            <span className="text-yellow-500">
              Restaurantly
            </span>
          </h1>
          <h3 className="text-gray-300 text-lg mb-6">
            Delivering great food for more than 18 years!
          </h3>
          <div className="flex gap-4">
            <button className="buttons">
              OUR MENU
            </button>
            <button className="buttons">
              BOOK A TABLE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
