import React, {FC} from 'react';
import {ICar} from "@/src/models/ICar";

type CarProps = {
    car: ICar
}
const CarComponent:FC<CarProps> = ({car}) => {
    return (
        <div>
            <p>Id car: {car.id}</p>
            <h1>Name: {car.brand}</h1>
            <hr/>
        </div>
    );
};

export default CarComponent;