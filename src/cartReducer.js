export default function cartReducer( cart, action ){

    switch(action.type){
case "empty":
    return [];
    case "add":{ 
    const { id, sku }= action;
        const itemInCart = cart.find((i) => i.sku === sku);
        if (itemInCart) {
          //return new array with the matching item replaced
          return cart.map((i) =>
            i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
          );
        } else {
          //Return new array with the new item appendes
          return [...cart, { id: id, sku, quantity: 1 }];
        };}
     case "updateQuantity":
         const { quantity, sku} = action;
              quantity === 0
              ? cart.filter((i) => i.sku !== sku)
              : cart.map((i) => (i.sku === sku ? { ...i, quantity } : i));
         
    default:
        throw new Error("Unhandled action "+ action.type);
    }
}