import { createContext, useState} from 'react'

const CartContext = createContext()


//------------------------------
export const CartProvider = ({children})=>{
    //LOGICA DEL CARRITO

      //Productos en carrito
    const [cartProducts, setCartProducts] = useState([]);
    const [countVisualisation, setCountVisualisation] = useState(true);

  //***************ADD PRODUCTS TO CART**************************
  ////////////////////////////////////////////////////////////////////////
  const addItemToCart = (i) => {
    //Verifico si existen dos items iguales(true/false)
    const isInCart = cartProducts.some((item) => item.id === i.id);

    if (isInCart) {
      //Si existe, mapeo el array para, una vez encontrado el item, sumarle solo la cantidad
      const updatedCartProducts = cartProducts.map((item) => {
        if (item.id === i.id) {
          return { ...item, qty: item.qty + i.qty, stock: item.stock - i.qty };
        } else {
          return item;
        }
      });
      console.log(updatedCartProducts);
      setCartProducts(updatedCartProducts);
    } else {
      i.stock = i.stock - i.qty;
      setCartProducts([...cartProducts, i]);
    }
  };
  //******************************************************

    return(
        <CartContext.Provider value={{
            addItemToCart,
            countVisualisation,
            setCountVisualisation
        }}>
            {children}
        </CartContext.Provider>
    )
}
// export {CartProvider}
//------------------------------

export default CartContext