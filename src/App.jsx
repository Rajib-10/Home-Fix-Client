
import CountUp from "react-countup";
import { Cursor, useTypewriter } from "react-simple-typewriter";
function App() {
  const [text] = useTypewriter({
    words: [" developer", " photographer", " coder"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <>
      <h1 className="text-4xl text-orange-500 ">
        Hello Home-Fix
        <span className="text-4xl text-indigo-700">
          {text} <Cursor cursorStyle="<" />
        </span>
      </h1>

      <div>
        <h1 className="text-center text-3xl text-blue-400 ">
          We have <CountUp end={10} duration={3} /> years experience
        </h1>
        <div >
        
        </div>
      </div>

      


    </>
  );
}

export default App;
