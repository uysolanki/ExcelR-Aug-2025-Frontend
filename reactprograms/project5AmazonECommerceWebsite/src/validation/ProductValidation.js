import * as yup from "yup";

export const validateProduct= yup.object(
    {
    title:yup
    .string()
    .required("Title is required")
    .matches(/^[a-zA-Z0-9 !@#$%^&*(),.?":{}|<>_\-+=]*$/, "Enter a valid title with special characters and digits allowed" )
    .min(3, "Title must be at least 3 characters")
    .max(200, "Title must be at most 200 characters"),

    price: yup
    .number()
    .typeError("Price must be a number")
    .min(1, "Min Price must be greater than 0")
    .max(100000, "Max Price must be less than or equal to 100000")
    .required("Price is Mandatory"),

   description: yup
    .string()
    .matches(/^[a-zA-Z0-9 '!@#$%^&*(),.?":{}|<>_\-+=]*$/, "Enter a valid description" ),

   category: yup
    .string()
    .matches(/^[a-zA-Z0-9 '!@#$%^&*(),.?":{}|<>_\-+=]*$/, "Enter a valid category" )
    .required("Category is Mandatory"),

  image: yup
    .string()
    .url("Enter a valid URL") 
    .matches(/\.(jpeg|jpg|png|gif|bmp|svg)$/i, "Enter a valid image URL (jpeg, jpg, png, gif, bmp, svg)")
    .required("Image URL is Mandatory")

    }
)
