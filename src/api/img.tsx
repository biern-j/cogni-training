import { request } from "../utils/request";

export const getImg = async () => await request("https://picsum.photos/200");