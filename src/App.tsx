import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Container, CssBaseline} from "@mui/material";
import AddCategory from "./containers/AddCategory/AddCategory";
import Categories from "./containers/Categories/Categories";
import EditCategory from "./containers/EditCategory/EditCategory";


function App() {
  return (
    <>
      <CssBaseline/>
      <header>
      </header>
      <Container sx={{mt: 5}}>
        <Routes>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/categories/add-category" element={<AddCategory/>}/>
          <Route path="/categories/edit-category/:id" element={<EditCategory/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
