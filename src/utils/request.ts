import axios, { AxiosRequestConfig } from "axios";

type Body = | { [k: string]: any } | FormData;
type Option = Partial<AxiosRequestConfig>;

export async function request (path: string, body?: Body, options?: Option) {

    let requestBody;

    if (body instanceof FormData) {
        requestBody = body;
    } else {
        requestBody = JSON.stringify(body);
    }

    const requestOpiton: Option = {
        method: "get",
        data: requestBody || null,
        headers: {
            "Content-Type": "img/png"
        },
        ...options,
    };

    try {
        const response = await axios(path, requestOpiton);
        return response.data;
    } catch (error) {
        throw error;
    }


} 