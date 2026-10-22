"use server"
import {carSchema} from "@/lib/schema";
import {AddCar} from "@/src/services/api.service";

export const addCar = async (fromdata:FormData):Promise<void>=>{
    const data={
        brand:fromdata.get('brand'),
        price:Number(fromdata.get('price')),
        year:Number(fromdata.get('year')),
    }
    const result = carSchema.safeParse(data)
    if (!result.success) {
        console.log(result.error)
        return
    }
    console.log(result.data)
    await AddCar(result.data)
}