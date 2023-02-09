import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to my blog';

  const linh = { name: 'linh', age: 19}
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;