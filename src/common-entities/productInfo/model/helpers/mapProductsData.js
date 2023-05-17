import { APP_CONSTANTS } from "../../../../shared/constants/appConstants";
import { createMask } from "../../../../shared/utils/createMask";
import moment from "moment";

const { CATEGORY_NUM, FACTORY_NUM, PRODUCTS_NUM } = APP_CONSTANTS;

const mask = createMask(CATEGORY_NUM, FACTORY_NUM, PRODUCTS_NUM);

export const mapProductsData = (products) => {
    let data = mask;
    products
        ?.filter((item) => item.date)
        .forEach((item) => {
            const key = moment(item.date, "D/M/YYYY").month();
            const current = data[key][`factory${item.factory_id}`];
            return Object.keys(current).map(
                (product) => (current[product] += item[product])
            );
        });
    return data;
};
