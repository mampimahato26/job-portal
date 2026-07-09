/*import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        };
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error);
    }
}
export default isAuthenticated;*/
import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {

        // 1️⃣ Cookie se token nikaal rahe hain
        const token = req.cookies.token;

        // DEBUG: check karo token aa raha hai ya nahi
        console.log("TOKEN:", token);

        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            })
        }

        // 2️⃣ Token verify kar rahe hain
        const decode = jwt.verify(token, process.env.SECRET_KEY);

        // DEBUG: decoded token check karo
        console.log("DECODE:", decode);

        if(!decode){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        };

        // 3️⃣ User id request me save kar rahe hain
        req.id = decode.userId;

        // DEBUG: check karo req.id set hua ya nahi
        console.log("REQ.ID:", req.id);

        next();

    } catch (error) {
        console.log(error);
    }
}

export default isAuthenticated;