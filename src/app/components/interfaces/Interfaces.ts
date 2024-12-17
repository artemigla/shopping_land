export interface IProducts {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: [];
    brand: string;
    weight: number;
    dimensions: [{weight: number}, {height: number}, {depth: number}];
    reviews:[{
        rating: number;
        comment: string;
        data: string
    }];
    images: string;
}

export interface IPropsProducts {
    productsProps: IProducts[]
}