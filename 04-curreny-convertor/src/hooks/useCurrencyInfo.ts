import { useEffect, useState } from "react";

const useCurrencyInfo = (currency: string) => {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((resp: any) => resp.json())
        .then((res: any) => {
            console.log('check response here ', res);
            setData(res[currency]);
        })
        .catch((err: any) => console.log('Error in api ', err));

        console.log('data final ', data);
        
    }, [currency]);

    return data;
}

export default useCurrencyInfo;