export class Product{
    constructor(
        public prodacuId: number,
        public productName: string,
        public price: number,
        public description: string,
        public productQty: number,
        public productImage: string,
    ){}
}