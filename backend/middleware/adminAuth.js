import jwt from 'jsonwebtoken'

const adminAuth = async (req,res,next) => {
    try {
        let {token} = req.cookies

    if(!token) {
        return res.status(401).json({message:"Admin authentication required"})
    }
    
    let verifyToken;
    try {
        verifyToken = jwt.verify(token,process.env.JWT_SECRET)
    } catch (err) {
        return res.status(401).json({message:"Invalid or expired admin token"})
    }

    if(!verifyToken || verifyToken.email !== process.env.ADMIN_EMAIL){
         return res.status(401).json({message:"Unauthorized access"})
    }
    
    req.adminEmail = verifyToken.email

    next()
        
    } catch (error) {
           console.error("adminAuth error:", error);
    return res.status(500).json({message:"Admin authentication failed. Please try again later."})
    }


}

export default adminAuth