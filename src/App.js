import { Switch, Route } from 'react-router-dom'

import Index from './pages/Index'

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Index} />
      </Switch>
    </>
  );
}

export default App;
