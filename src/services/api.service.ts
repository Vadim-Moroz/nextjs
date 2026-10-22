import {ICar} from "@/src/models/ICar";


export const getCars = async ():Promise<ICar[]>=>{
    const cars= await fetch('http://bigbird.space/carsAPI/v1/cars')
        .then(response => response.json())
    return cars;
}

export const AddCar = async (car:ICar):Promise<ICar> => {
    const response = await fetch("http://bigbird.space/carsAPI/v1/cars", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(car),
    });

    return await response.json();
}