import { createMask } from '../../../shared/utils/createMask';
import { createStore } from "effector";
import { getProductInfoFx } from "./effects";
import moment from "moment";

const FACTORY_NUM = 2;
const PRODUCTS_NUM = 2;
const CATEGORY_NUM = 12;

const mask = createMask(CATEGORY_NUM, FACTORY_NUM, PRODUCTS_NUM);

export const $productInfo = createStore({products: null, isInitialize: false}).on(
    getProductInfoFx.doneData,
    (_, products) => {
        let data = mask;
        products?.filter((item) => item.date).forEach((item) => {
            const key = moment(item.date, "D/M/YYYY").month();
            const current = data[key][`factory${item.factory_id}`];
            return Object.keys(current).map(
                (product) => (current[product] += item[product])
            );
        });
    
        return ({
            products: data,
            isInitialized: true
        })
    }
);
