
import { BlogTloger } from '../views/blogTloger';
export function Blog() {
  return (
    <div className="Blog bg-white   ">
    
      <div className="head flex justify-center">
        <h1 className="text-6xl sm:text-7xl text-amber-900 font-bold mr-4">My Recent</h1>
        <h1 className="text-6xl sm:text-7xl text-blue-800 font-bold">projects</h1>
      </div>

    
      <BlogTloger />
    </div>
  );
}
