import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "components/Layout";
import { Home } from "pages/Home";
import { SearchResultPage } from "pages/SeachResults";
import { ItemPage } from "pages/ItemPage";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="search/:query" element={<SearchResultPage />} />
          
          <Route path="item/:id" element={<ItemPage />} />
        </Route>
      </Routes>
    </>
  );
}

export { AppRouter };
