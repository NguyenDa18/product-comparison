import React, { useState } from "react";

import { Container } from "@material-ui/core";

import AttributeFilter from "./AttributeFilter";
import ProductList from "./ProductList";
import ComparisonTable from "./ComparisonTable";
import SectionHeader from "./SectionHeader";

const ProductComparison = ({ products, filters }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState(filters);

  const addToCompare = (item) => {
    setSelectedItems((selectedItems) => [...selectedItems, item]);
  };

  const removeFromCompare = (item) => {
    const filteredItems = selectedItems.filter(
      (product) => product.id !== item.id
    );
    setSelectedItems((selectedItems) => filteredItems);
  };

  const saveFilters = (selected) => {
    setSelectedFilters((selectedFilters) => selected);
  };

  return (
    <Container maxWidth="md">
      <SectionHeader title="Select 2 or more products to compare">
        {selectedItems.length > 1 && (
          <AttributeFilter
            save={saveFilters}
            data={filters}
            selected={selectedFilters}
          />
        )}
      </SectionHeader>
      <ProductList
        data={products}
        selected={[...selectedItems]}
        addToCompare={addToCompare}
        removeFromCompare={removeFromCompare}
      />
      {selectedItems.length > 1 && (
        <ComparisonTable
          data={[...selectedItems]}
          filters={[...selectedFilters]}
        />
      )}
    </Container>
  );
};

export default ProductComparison;
