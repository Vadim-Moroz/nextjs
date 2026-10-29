"use client"
import {addCar} from "@/src/server-action/serveractions";
import {useForm} from "react-hook-form";
import {carValidation} from "@/src/validation/validation";
import {joiResolver} from "@hookform/resolvers/joi";

type FormDataType = {
    brand: string,
    price: number,
    year: number
}

const AddCarPage = () => {

    const custom=async (data:FormDataType)=>{
        console.log("AddCarPage called");

        const formData = new FormData();

        formData.append("brand", data.brand);
        formData.append("price", String(data.price));
        formData.append("year", String(data.year));

        const result = await addCar(formData);
        if (result.success) {
            reset();
            alert("Successfully added");
        }else{
            alert("Something went wrong");
        }
    }
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
        } = useForm<FormDataType>({
        mode: "all", resolver: joiResolver(carValidation)
    })
    return (
        <div>
            <form onSubmit={handleSubmit(custom)}>
                <div>
                    <input type="text" {...register("brand")} placeholder={"brand"}/>
                    {errors.brand && <p>{errors.brand.message}</p>}
                </div>
                <div>
                    <input type="text" {...register("price")} placeholder={"price"}/>
                    {errors.price && <p>{errors.price.message}</p>}
                </div>
                <div>
                    <input type="text" {...register("year")} placeholder={"year"}/>
                    {errors.year && <p>{errors.year.message}</p>}
                </div>
                <button type={"submit"}>add car</button>
            </form>
        </div>
    );
};

export default AddCarPage;