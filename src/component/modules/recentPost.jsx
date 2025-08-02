import { RecentCard } from "../views/recentCard";
export function RecentPost() {
  return(
    <>
    <div className="recentPosts h-140 w-100% bg-blue-100">
       <div className="topDiv flex justify-between pl-50 pr-50 pt-10">
        <h1 className="text-red-600 text-2xl">Recent Posts</h1> 
       <h1 className="text-blue-500 text-2xl" >View all</h1>
       </div>
       <RecentCard></RecentCard>
    </div>
    </>
  );
}