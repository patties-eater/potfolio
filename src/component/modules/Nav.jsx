import { NavItems } from "../views/navItems";

export function Nav(){
  return(
  <>
  <div className="nav border bg-gray-200  ml-10 border-red-600 flex flex-row-reverse mt-5 mr-25 sticky bottom-0 right-0  left-0 top-0">
    
  <NavItems />
  </div>
  </>
  );
}