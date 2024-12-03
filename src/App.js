import './App.css';
import Appbar from './components/Appbar'
import Users from './components/Users'

function App() {
  return (
    <div className="App">
    <Appbar/>
    <Users/>
    </div>
  );
}

export default App;


// import './App.css';
// //import Appbar from './components/Appbar';
// import Registration from './components/Registration'; // Dodajemy komponent Registration

// function App() {
//   return (
//     <div className="App">
//       {/* <Appbar /> */}
//       <Registration />
//     </div>
//   );
// }

// export default App;