import { createStore } from "effector";
import { getProductInfoFx } from "./effects";
import { mapProductsData } from "./helpers/mapProductsData";

export const $productInfo = createStore({
    products: null,
    isInitialize: false,
}).on(getProductInfoFx.doneData, (_, products) => ({
    products: mapProductsData(products),
    isInitialized: true,
}));
