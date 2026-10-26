import {z} from "zod";
export const carSchema = z.object({
    brand: z.string().min(3,"Min 3 char"),
    price: z.number().min(0,"Min price is 0").max(1000000,"Maximum price is 1000000"),
    year: z.number().min(1990,"Min year is 1990").max(2026,"Max year is 2026")
})