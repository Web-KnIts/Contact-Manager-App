const Contact = require('../model/contactModel');
exports.updateContact = async(req,res)=>{
    try{
        const id = req.params.id
        const contact = await Contact.findByIdAndUpdate(id,req.body,{new:true})
        if(!contact){
            res.status(404)
            throw new Error("Contact not found")
        }
        res.status(200).json({
            success:true,
            contact:contact,
            message:" Contacts updated successfully"
        })
    }
    catch(err)
    {
        res.status(404).json({
            success:false,
            message:"Contact not found",
            error:err.message
        })
    }
}