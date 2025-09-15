import jwt from 'jsonwebtoken';

export const generateToken = (userId, res) =>{
const token = jwt.sign({userId}, process.env.JWT_SECRET,{
    expiresIn: '10d',
})

res.cookie("jwt",token, {
    maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Set to true in production
    sameSite: 'strict',
})

return token;
}