"use server"
import {AddCar} from "@/src/services/api.service";
import {carValidation} from "@/src/validation/validation";

export const addCar = async (fromdata:FormData):Promise<void>=>{
    const data={
        brand:fromdata.get('brand'),
        price:Number(fromdata.get('price')),
        year:Number(fromdata.get('year')),
    }
    const result = carValidation.validate(data)
    if (result.error) {
        console.log(result.error)
        return
    }
    console.log(result.value)
    await AddCar(result.value)
}