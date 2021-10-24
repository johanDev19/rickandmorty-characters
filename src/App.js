import React from "react";
import AppRouter from "./AppRouter";
import SearchBar from "./components/SearchBar/SearchBar";
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
