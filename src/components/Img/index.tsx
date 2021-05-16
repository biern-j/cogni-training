import React from "react";
import { useQuery,  } from "react-query";
import { getImg } from "../../api/img";

export const Img = () => {
    const queryImg = useQuery('img', getImg);

    console.log("queryImg",queryImg.data);

    return <div><img src={queryImg.data}/></div>
}