import React from "react";
import ProductComparison from "./components/ProductComparison";

import { products } from "./data/Products";
import { filters } from "./data/Filters";

const App = () => <ProductComparison products={products} filters={filters} />;

export default App;
