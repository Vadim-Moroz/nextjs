import React from 'react';
import {getCars} from "@/src/services/api.service";
import CarComponent from "@/src/component/cars-component/CarComponent";

const CarsComponent = async () => {
    const cars = await getCars();
    return (
        <div>
            {cars.map(car=><CarComponent key={car.id} car={car}/>)}
        </div>
    );
};

export default CarsComponent;