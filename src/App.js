import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "routes/routesList";

function App() {
  return (
    
    <Router>
      <Routes>
        {routes.map(({ ...rest }, index) => (
          <Route key={`${index}`} {...rest} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
