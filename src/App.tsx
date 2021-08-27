import { Route, Switch } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductCreate } from './pages/ProductCreate';
import { ProductEdit } from './pages/ProductEdit';
import { NotFoundPage } from './pages/NotFoundPage';
function App() {
  return (
    <Switch>
      <Route exact path="/product/:id">
        <ProductPage />
      </Route>
      <Route exact path="/page/:page">
        <ProductsPage />
      </Route>
      <Route exact path="/product/:id/edit">
        <ProductEdit />
      </Route>
      <Route exact path="/create">
        <ProductCreate />
      </Route>
      <Route exact path="/error">
        <NotFoundPage />
      </Route>
      <Route exact path="/">
        <ProductsPage />
      </Route>
    </Switch>
  );
}

export default App;
