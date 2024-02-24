//groq

//warning!
//should only fetch 5 data
//this should have restiction on the type of data being fetched
export const fetchAllShops = '*[_type == "shop" && isActive && !(_id in path("drafts.**"))]';

export const fetchAllDishes = '*[_type == "dish" && isAvailable&& !(_id in path("drafts.**"))]';

export const fetchAllProducts = '*[_type == "product" && isAvailable&& !(_id in path("drafts.**"))]';

export const fetchTags = '*[_id in $allTagIds];';

export const isAvaFeaPro = '*[isAvailable]';

export function fetchDataByShopIdAndAllAssets(shopId: string) {
    const query = `*[_id == '${shopId}'
    || shop._ref == '${shopId}']`
    return query;
}

export function fetchDataById(id: string) {
    const data = `*[_id == "${id}"]`;
    return data;
}

