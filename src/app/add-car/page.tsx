import {addCar} from "@/src/server-action/serveractions";

const AddCarPage = () => {
    return (
        <div>
            <form action={addCar}>
                <input type="text" name={"brand"} placeholder={"brand"}/>
                <input type="text" name={"price"} placeholder={"price"}/>
                <input type="text" name={"year"} placeholder={"year"}/>
                <button type={"submit"}>add car</button>
            </form>
        </div>
    );
};

export default AddCarPage;