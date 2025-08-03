
import './App.css'
import { FirstPage } from './component/pages/firstPage'
import { SecondPage } from './component/pages/secondpage'
import { ThirdPage } from './component/pages/thirdpage'
function App() {
  
 
  return (
    <div className="myApp h-1000 w-500 flex items-center  ml-[10%] flex-col   sticky  top-0">

     <div className=' border   items-center '>
      
      <FirstPage />
      <SecondPage />
      <ThirdPage />
     </div>
      
    </div>
  )
}

export default App
