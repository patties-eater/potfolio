import Amity from '/amity.png';
import Go from '/go.png';
export function Blog() {
  return (
    <div className="Blog bg-white border h-270 py-20 px-10">
    
      <div className="head flex justify-center">
        <h1 className="text-6xl sm:text-7xl text-amber-900 font-bold mr-4">My Recent</h1>
        <h1 className="text-6xl sm:text-7xl text-blue-800 font-bold">projects</h1>
      </div>

    
      <div className="indivisualProject flex flex-col items-center mt-20">
        <img
          className=" h-120 bg-amber-1400 w-250"
          src={Amity}
          alt="Amity Project"
        />
        <h1 className="text-3xl font-semibold text-center mt-4">Amity App</h1>
        <h1 className='text-2xl'>A school management application developed by high school students, now being used by 300+ students and teacher.</h1>

        <div className="actions flex ">
          <h1 className='text-2xl m-10 flex items-center text-blue-800'>GitHub Repository <a href=""><img  className='h-5 w-5' src={Go} alt="" /> </a></h1>

          <h1 className='text-2xl flex m-10 items-center text-blue-800'>See Live <a href=""><img  className='h-5 w-5' src={Go} alt="" /> </a></h1>

        </div>
      </div>
    </div>
  );
}
