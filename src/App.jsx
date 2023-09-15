
import {useState} from "react"
import Router from "./router/Router";
import publicRoutes from '../src/router/routes/publicRoutes'

function App() {
  const [allRoutes, setaAllRoutes] = useState([...publicRoutes]);

  console.log(allRoutes);

  return <Router allRoutes={allRoutes}/>
}

export default App;
