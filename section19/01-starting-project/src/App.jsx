import Header from "./components/Header.jsx";
import { Meals } from "./components/Meals.jsx";
import { CartContextProvider } from "./store/cart-context.jsx";

function App() {
  return (
    <>
      <Header />
      <CartContextProvider>
        <Meals />
      </CartContextProvider>
    </>
  );
}

export default App;
