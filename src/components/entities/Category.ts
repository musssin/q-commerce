import type { Guid } from 'guid-ts';
class Category {
    id: Guid;
    name: string;
    constructor(id: Guid, name: string) {
        this.id = id;
        this.name = name;
    }
}
export default Category