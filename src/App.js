import { Switch, Route } from 'react-router-dom'

import Index from './pages/Index'
import Signup from './pages/Signup'

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/sign-up" exact component={Signup} />
      </Switch>
    </>
  );
}

export default App;
