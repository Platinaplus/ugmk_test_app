import { $productInfo } from "./store";
import { useStoreMap } from "effector-react";

export const useProducts = () =>
    useStoreMap($productInfo, ({ products }) => products);

export const useFactoryMonthProducts = (factoryId, month) =>
    useStoreMap($productInfo, ({ products, isInitialized }) => {
        if (isInitialized) {
            return products[month - 1][`factory${factoryId}`];
        }
        return [];
    });
