import type { Guid } from 'guid-ts';
class Brand {
    id: Guid;
    name: string;
    constructor(id: Guid, name: string) {
        this.id = id;
        this.name = name;
    }
}
export default Brand