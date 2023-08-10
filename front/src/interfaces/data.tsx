export interface IData {
    id: number;
    value: number;
    size: number;
    image: {
        image1: string;
        image2: string;
        image3: string;
    };
    category: string;
    totalArea: string;
    room: string;
    bathroom: string;
    address: {
        street: string;
        zipCode: string;
        number: string;
        city: string;
        state: string;
    };
    description: string;
}
