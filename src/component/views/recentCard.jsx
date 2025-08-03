

export function RecentCard() {
  
  const cardItems = [
    {
      Headers:"Making a design system from scratch",
      Date: "12 feb 2020",
      title: "Design, patten",
      bref: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
       Headers:"Making a design system from scratch",
      Date: "12 feb 2020",
      title: "Design, patten",
      bref: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
    ,
    {
       Headers:"Making a design system from scratch",
      Date: "12 feb 2020",
      title: "Design, patten",
      bref: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }

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