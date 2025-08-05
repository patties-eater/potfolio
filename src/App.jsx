
import './App.css'
import { FirstPage } from './component/pages/firstPage'
import { SecondPage } from './component/pages/secondpage'
import { ThirdPage } from './component/pages/thirdpage'
import { FourthPage } from './component/pages/fourthpage'
function App() {
  
 
  return (
    <div className="myApp h-full w-screen flex   justify-center  bg-gray-100">

     <div className=' border   items-center '>
      
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
     </div>
      
    </div>
  )
}

export default App
