"use server"
import {AddCar} from "@/src/services/api.service";
import {carValidation} from "@/src/validation/validation";

export const addCar = async (formData:FormData)=>{
    const data={
        brand:formData.get('brand'),
        price:formData.get('price'),
        year:formData.get('year'),
    }
    const result = carValidation.validate(data)
    if (result.error) {
        console.log(result.error)
        return {success: false}
    }
    console.log(result.value)
    try {
        await AddCar(result.value)
        return {success: true}
    }catch(error){
        console.error("Failed to add car:", error);
        return {success: false}
    }


}