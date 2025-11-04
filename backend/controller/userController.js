import User from "../model/userModel.js"


export const getCurrentUser = async (req,res) => {
    try {
        let user = await User.findById(req.userId).select("-password")
        if(!user){
           return res.status(404).json({message:"User not found"}) 
        }
        return res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            cartData: user.cartData
        })
    } catch (error) {
         console.error("getCurrentUser error:", error);
    return res.status(500).json({message:"Failed to get user data. Please try again later."})
    }
}

export const getAdmin = async (req,res) => {
    try {
        let adminEmail = req.adminEmail;
        if(!adminEmail){
            return res.status(404).json({message:"Admin is not found"}) 
        }
        return res.status(200).json({
            email:adminEmail,
            role:"admin"
        })
    } catch (error) {
        console.error("getAdmin error:", error);
    return res.status(500).json({message:"Failed to get admin data. Please try again later."})
    }
}