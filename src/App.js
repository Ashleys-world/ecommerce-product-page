import Information from './Information';
import Navbar from './Navbar';
import Picture from './Picture';

function App() {
  return (
    <div className=" lg:h-screen lg:w-screen">{/*whole screen*/}
      <Navbar/>
      <div className="grid lg:grid-cols-2 lg:gap-4 mx-0 px-0  lg:w-250 
        lg:mx-20 grid-cols-1  gap-0">{/*main*/}
        <Picture/>
        <Information/>
      </div>
    </div>
  );
}

export default App;
