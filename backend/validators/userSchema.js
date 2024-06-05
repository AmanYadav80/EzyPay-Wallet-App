const z=require('zod');
const userSchema=z.object({
    username:z.string().min(1,"Username is required")
    .email(1,"Username must be a valid email address"),
    firstName:z.string().min(1,"First Name is required"),
    lastName:z.string().min(1,"Last Name is required"),
    password:z.string().min(6,"Password must be atleast 6 characters long"),
});

module.exports={
    userSchema,
};