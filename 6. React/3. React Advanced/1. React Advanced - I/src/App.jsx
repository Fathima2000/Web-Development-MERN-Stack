import Random from "./components/Random";
import Tag from './components/Tag'

export default function App() {
  return (
    <div className="="w-full h-screen flex flex-col background relative>
      <h1 className="absolute bg-white rounded-sm w-full text-center mt-40px ml-25px mr-25px ">RANDOM GIFS</h1>
      <div>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
