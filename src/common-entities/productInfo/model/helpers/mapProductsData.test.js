import { mockData, result } from './mock';

import { mapProductsData } from "./mapProductsData";

describe("mapProductsData should work correctly", () => {
    it("get", () => {
        expect(mapProductsData(mockData)).toStrictEqual(result);
    });
});
