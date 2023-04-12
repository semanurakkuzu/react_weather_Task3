
import Cards from './components/Cards'
import Provinces from './components/Provinces'
import {SelectProvider} from './context/SelectProvince'

function App() {
  return (
    <SelectProvider>
      <div className="h-screen bg-cover bg-center  bg-[url('./images/background3.jpg')]">
        <div className="pt-10 text-zinc-500">
          <p className="text-center text-7xl pb-10">Weather</p>
          <Provinces></Provinces>
          <Cards></Cards>
        </div>
      </div>
    </SelectProvider>
  )
}

export default App
