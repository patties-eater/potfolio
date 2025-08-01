import { MyIntro } from "../views/MyIntro";
import { Dp } from "../views/dp";

export function Intro(){
  return( 
  <>
  <div className="section flex col items-center">
    
  <MyIntro></MyIntro>
  <Dp></Dp>
  </div>
  </>
  );
}