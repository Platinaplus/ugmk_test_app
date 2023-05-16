import { createEffect, forward } from "effector";
import { getProductInfo } from "./events";

import { PRODUCTS_INFO_API_URL } from "../../../shared/constants/apiConstants";

export const getProductInfoFx = createEffect(async () =>
    fetch(`${PRODUCTS_INFO_API_URL}`).then((req) =>
        req.json().catch(console.error)
    )
);

forward({
    from: getProductInfo,
    to: getProductInfoFx,
});
