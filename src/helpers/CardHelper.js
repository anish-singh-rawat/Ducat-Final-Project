export const addTocardHelper = (product, cart, user, quantity = false) => {
    let newCartObject = { ...cart }
    if (newCartObject.items?.length > 0) {
        let productExit = newCartObject.items.find(item => item.id === product.id)
        let productExitsIndex = newCartObject.items.findIndex(item => item.id === product.id)

        if (productExit) {
            if(quantity){
                if(product.quantity === 0 ){
                    newCartObject.item?.splice(productExitsIndex, 1)

                }else{
                    productExit.quantity = product.quantity;
                    newCartObject.items?.splice(productExitsIndex, 1, productExit);
                }
            }
            else{
                productExit.quantity += 1;
                newCartObject.items?.splice(productExitsIndex, 1, productExit);
            }
        }
        else{
            newCartObject.items.push({...product, quantity : 1})
        }

    }
    else {
        newCartObject.items.push({ ...product, quantity: 1 });
    }

    newCartObject.subTotal = 0;
    newCartObject.tax = 0;
    newCartObject.grandTotal = 0;


    for (const item of newCartObject.items) {
        newCartObject.subTotal += (+item.final_price * item.quantity)
        newCartObject.grandTotal +=( +item.final_price * item.quantity)
    }

    newCartObject.user = user

    return newCartObject;
}
