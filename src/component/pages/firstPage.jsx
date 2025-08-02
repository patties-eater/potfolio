import { Nav } from "../modules/Nav";
import { Intro } from "../modules/IntroSecrion";
export function FirstPage(){
  return(
    <>
    <Nav/>
    <div className="intro pt-15">
       <Intro></Intro>
    </div>
    </>
  );

}