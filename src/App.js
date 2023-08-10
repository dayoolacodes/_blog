import { useGetAllPost } from "lib/queries/getPosts";
import { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "routes/routesList";

export const AppContext = createContext();
AppContext.displayName = "AppContext";

function App() {
  const { Provider: AppProvider } = AppContext;
  const [pageHeight, setPageHeight] = useState("");
  const { data: posts, status, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetAllPost();

  return (
    <AppProvider
      value={{
        pageHeight,
        setPageHeight,
        posts,
        status,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage
      }}
    >
      <Router>
        <Routes>
          {routes.map(({ ...rest }, index) => (
            <Route key={`${index}`} {...rest} />
          ))}
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useInvoice must be used within a Invoice provider");
  }
  return context;
};
