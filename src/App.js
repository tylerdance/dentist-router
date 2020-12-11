import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Procedures from './components/Procedures';
import Nav from './components/Nav'
import ProcedureDetails from './components/ProcedureDetails'
import './App.css';


function App() {
// const procedureList = ['root canal', 'crown', 'cleaning']
  const proceduresList = [
    {
      name: 'Root canal',
      id: 1,
      description: 'Very painful'
    },
    {
      name: 'Crown',
      id: 2,
      description: 'something'
    },
    {
      name: 'Cleaning',
      id: 3,
      description: 'something else'
    }
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/procedures" exact render={() => { return <Procedures proceduresList={proceduresList}/>}} />
        <Route path="/procedures/:id" render={(routeInfo) => {
          // console.log(routeInfo.match.params);
          const id = routeInfo.match.params.id
          const targetProcedure = proceduresList.find((p) => p.id === parseInt(id))
          // console.log(targetProcedure);
          return <ProcedureDetails procedure={targetProcedure} />
        }} />
      </div>
    </BrowserRouter>
  );
}

export default App;
