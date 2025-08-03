import { NavItems } from "../views/navItems";

export function Nav(){
  return(
  <>
  <div className="nav border bg-white shadow-md ml-25 border-red-600 flex flex-row-reverse mt-5 mr-25 sticky bottom-0 right-0  left-0 top-0">
    
  <NavItems />
  </div>
  </>
  );
}