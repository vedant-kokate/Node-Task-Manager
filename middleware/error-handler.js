const {CustomAPIError} = require("../errors/custom-errors")
const errorHandler = (err,req,res,next)=>{
    if(err instanceof CustomAPIError){
        return res.status(er.statusCode).json({mess:err.message })
    }
    return res.status(500).json({msg:err})
}
module.exports = errorHandler