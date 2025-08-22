import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];
    const newItem = { ...action.payload };
    const existingCartItemIndex = updatedItems.findIndex(
      (item) => item.id === newItem.id
    );

    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        ...newItem,
        quantity: 1,
      });
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedItems = [...state.items];
    const indexOfItemToRemove = updatedItems.findIndex(
      (item) => (item.id = action.payload)
    );
    let itemToRemove = updatedItems[indexOfItemToRemove];
    if (itemToRemove.quantity > 1) {
      itemToRemove = {
        ...itemToRemove,
        quantity: itemToRemove.quantity - 1,
      };
      updatedItems[indexOfItemToRemove] = itemToRemove;
    } else {
      updatedItems.splice(indexOfItemToRemove, 1);
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: [],
  });

  function handleAddItem(item) {
    cartDispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  }

  function handleRemoveItem(id) {
    cartDispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  }

  const contextValue = {
    items: cartState.items,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
  };

  return <CartContext value={contextValue}>{children}</CartContext>;
}

export default CartContext;
