import { MyIntro } from "../views/MyIntro";
import { Dp } from "../views/dp";

export function Intro(){
  return( 
  <>
  <div className="section h-230 flex col items-center">
    
  <MyIntro></MyIntro>
   <div className="dp pb-20"><Dp></Dp></div>
  </div>
  </>
  );
}