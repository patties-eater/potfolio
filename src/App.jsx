
import './App.css'
import { FirstPage } from './component/pages/firstPage'
import { SecondPage } from './component/pages/secondpage'
import { ThirdPage } from './component/pages/thirdpage'
import { FourthPage } from './component/pages/fourthpage'
import { FifthPage } from './component/pages/fifthpage'
function App() {
  
 
  return (
    <div className="myApp h-full w-screen flex   justify-center  bg-gray-100">

     <div className=' border   items-center '>
      
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      
      {/* Add any additional components or sections here */}
     </div>
      
    </div>
  )
}

export default App
