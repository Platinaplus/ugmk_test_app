import {  } from "../../common-entities/productInfo/model/selectors";

import { $productInfo, getProductInfo, getProductInfoFx, useProducts } from "../../common-entities/productInfo";
import React, { useEffect, useState } from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Loader } from "../../shared/ui/Loader";
import MenuItem from "@mui/material/MenuItem";
import { ProductChart } from "../../features/ProductChart";
import Select from "@mui/material/Select";
import s from "./MainChart.module.scss";
import { useNavigate } from "react-router-dom";
import { useStore } from "effector-react";

export const Main = () => {
    const [product, setProduct] = useState(0);
    const { isInitialized } = useStore($productInfo)

    const productParams = new URLSearchParams(document.location.search).get(
        "product"
    );

    useEffect(() => {
        setProduct(productParams || 0);
    }, [productParams]);
    
    useEffect(() => {
        if (!isInitialized){
            getProductInfo();
        }
    }, [isInitialized]);

    const products = useProducts();

    const navigate = useNavigate();

    const handleChange = (event) => {
        navigate(`?product=${event.target.value}`);
    };

    const loading = useStore(getProductInfoFx.pending);

    return (
        <>
            <div className={s.filter}>
                <div className={s.filter__wrapper}>
                    <span className={s.filter__title}>
                        Фильтр по типу продукции
                    </span>
                    <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label'>
                            Продукт
                        </InputLabel>
                        <Select
                            labelId='label'
                            id='select'
                            value={product}
                            label='Продукт'
                            onChange={handleChange}>
                            <MenuItem value={0}>Все продукты</MenuItem>
                            <MenuItem value={1}>Продукт 1</MenuItem>
                            <MenuItem value={2}>Продукт 2</MenuItem>
                            <MenuItem value={3}>Продукт 3</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            {loading ? (
                <Loader />
            ) : products ? (
                <ProductChart products={products} product={Number(product)} />
            ) : (
                <div>Пока данных нет...</div>
            )}
        </>
    );
};
