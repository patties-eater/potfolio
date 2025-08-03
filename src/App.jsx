
import './App.css'
import { FirstPage } from './component/pages/firstPage'
import { SecondPage } from './component/pages/secondpage'
import { ThirdPage } from './component/pages/thirdpage'
function App() {
  
 
  return (
    <div className="myApp h-screen w-screen flex   justify-center  bg-gray-100">

     <div className=' border   items-center '>
      
      <FirstPage />
      <SecondPage />
      <ThirdPage />
     </div>
      
    </div>
  )
}

export default App
