export const createMask = (categoryNum, factoryNum, productsNum) => {
    let mask = {};
    for (let i = 0; i < categoryNum; i++) {
        mask[i] = {};
        for (let j = 0; j < factoryNum; j++) {
            mask[i][`factory${j + 1}`] = {};
            for (let k = 0; k < productsNum; k++) {
                mask[i][`factory${j + 1}`][`product${k + 1}`] = 0;
            }
        }
    }
    return mask;
};
