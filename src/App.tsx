import { Route, Switch } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductCreate } from './pages/ProductCreate';
import { ProductEdit } from './pages/ProductEdit';

function App() {
  return (
    <Switch>
      <Route exact path="/:id">
        <ProductPage />
      </Route>
      <Route exact path="/">
        <ProductsPage />
      </Route>
      <Route exact path="/product/create">
        <ProductCreate />
      </Route>
      <Route exact path="/:id/edit">
        <ProductEdit />
      </Route>
    </Switch>
  );
}

export default App;
