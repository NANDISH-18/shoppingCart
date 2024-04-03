import { createContext, useState, useContext } from "react";
import CartModel from "./components/CartModel";

const itemContext = createContext();

// For consume the context
const useValue = () => {
    const value = useContext(itemContext);
    return value
}




// we can do the custom context
function CustomItemProvider({children}){
    // console.log(prop)
    const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showcart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

//   We can set the logic over here and then we can create many function like adding and removing
    const handleAdd = (prod) => {
        // Handle add
        // setTotal(total+ price);
        // setItem(item+1)  
        // console.log(prod);

        const index = cart.findIndex((item) => item.id === prod.id);

        if(index === -1){
            setCart([...cart , {...prod,qty:1}]);
            // console.log(cart);
            setTotal(total + prod.price)
        }else{
            cart[index].qty++;
            setCart(cart)
            setTotal(total + prod.price)
            // console.log(cart)
        }
        setItem(item+1);


    };

    const handleRemove = (id) => {
        // if(total<=0){
        // return
        // }
        // setTotal((prevState) => prevState-price)
        // setItem(item-1)
        const index = cart.findIndex((item) => item.id === id);

        if(index !==-1){
            cart[index].qty--;
            setItem(item-1)
            setTotal(total - cart[index].price);

            if(cart[index].qty == 0){
                cart.splice(index,1)
            }
            
        }
        setCart(cart);
    };

    const clear = () => {
        setTotal(0);
        setItem(0);
        setCart([]);
    }

    const toggle = () => {
        setShowCart(!showcart);
    }

    return (
        <itemContext.Provider value={{total, item ,setTotal, setItem, handleAdd, handleRemove, clear, toggle, cart, setCart}}>
            {showcart && <CartModel/>}
            {children}
        </itemContext.Provider>
    )
}



export {itemContext, useValue};
export default CustomItemProvider
