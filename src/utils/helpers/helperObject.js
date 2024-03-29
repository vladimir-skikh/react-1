export const updateObjectInArray = (items, itemId, objPropName, newObjProp) => {
    return items.map( item => {
        if (item[objPropName] === parseInt(itemId)) {
            let itemCopy = {
                ...item,
                ...newObjProp
            };
            return itemCopy;
        }
        return item;
    })
}