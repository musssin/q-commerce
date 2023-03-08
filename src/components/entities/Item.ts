import { Guid } from 'guid-ts';
class Item {
    id: Guid = Guid.newGuid();
    name: string;
    price: Number = 0;
    description: String = "";
    brand_id: Guid;
    category_id: Guid;
    constructor(id: Guid, name: string, brand_id: Guid, category_id: Guid) {
        this.id = id;
        this.name = name;
        this.brand_id = brand_id;
        this.category_id = category_id;
    }
}
export default Item