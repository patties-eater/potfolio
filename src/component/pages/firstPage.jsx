import { Nav } from "../modules/Nav";
import { Intro } from "../modules/IntroSecrion";
export function FirstPage(){
  return(
    <>
    <Nav/>
    <div className="intro">
       <Intro></Intro>
    </div>
    </>
  );

}