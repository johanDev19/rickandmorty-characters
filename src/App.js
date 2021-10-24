import React from "react";
import AppRouter from "./appRouter";
import SearchBar from "./components/searchBar";
import { ApplicationProvider } from "./context/ApplicationContext";

function App() {
  return (
    <ApplicationProvider>
      <SearchBar />
      <AppRouter />
    </ApplicationProvider>
  );
}

export default App;
