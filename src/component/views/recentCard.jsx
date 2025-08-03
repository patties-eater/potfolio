

export function RecentCard() {
  
  const cardItems = [
  {
    Headers: "To-Do App with Supabase Auth",
    Date: "02 Aug 2025",
    title: "Full Stack, Supabase",
    bref: "Created a fully functional to-do app with email login, real-time task management, and Supabase backend. It includes RLS policies for secure data access per user."
  },

  {
    Headers: "Learning Dashboard Design with Figma",
    Date: "10 Aug 2025 (planned)",
    title: "UI/UX, Figma",
    bref: "Planning to design a dashboard UI in Figma with reusable components and auto layout. Will convert it into a responsive React interface using Tailwind."
  },
  {
    Headers: "Personal Portfolio Website",
    Date: "28 Jul 2025",
    title: "Frontend, React",
    bref: "Built my own developer portfolio from scratch with project showcases, hover animations, smooth page transitions, and responsive layout."
  },

];

  return(

    <>
    <div className="recentCard flex justify-between ml-50 mr-50">
      {
        cardItems.map((task, index) => (
          <div key={index} className="Card h-90 w-100 bg-white  pr-7 pl-5 mr-10 mt-10">
            <div className="inide mt-7 ">
              
            <h1 className="text-3xl font-bold">{task.Headers}</h1>
            
            <div className="DayTitle flex justify-between pr-20 mb-5 mt-6  text-1xl">
              <h1>{task.Date}</h1>
              <h1>l</h1>
              <h1>{task.title}</h1>
            </div>
            <p className=" ">{task.bref}</p>
            </div>
            

          </div>
        ))

      }
    </div>
    </>
  );
}