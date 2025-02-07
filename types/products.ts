
export interface Product {
    _id : string;
    name : string;
    _type : "product";
    image? : {
        asset : {
            _ref : String;
            _type : "image";
        }
    };
    price : number;
    description? : string;
    slug : {
        _type : "slug";
        current : string
    };
    inventory : number;
}