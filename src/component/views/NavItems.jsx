export function NavItems(){

  const navItems = ["Contact" , "Blog","Projects" , "work"];
  return (
    <>

    {
      navItems.map((items, index) => (

    <h1 key={index} 
       className="text-2xl font-bold m-5 ">
       {items}
      </h1>
      ))
    }
    </>
  );
}