import Cards from "./components/Cards";
import Provinces from "./components/Provinces";

function App() {
  return (
    <div className="h-screen bg-cover bg-center bg-[url('./images/background1.jpg')]">
      <div className="pt-10 text-zinc-500">
        <p className="text-center text-7xl pb-10">Weather</p>
        <Provinces></Provinces>
        <Cards></Cards>
        </div>
    </div>
  );
}

export default App;
