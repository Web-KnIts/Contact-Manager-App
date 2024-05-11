const Contact = require('../model/contactModel')

exports.getContact = async(req,res)=>{
    try{
        const contacts = await Contact.find();

        res.status(200).json({
            success:true,
            contact:contacts,
            "message":"Contact fetched Successfully !"
        })
    }
    catch(err)
    {
        res.status(500).json({
            success:false,
            message:"internal server issue",
            error:err
        })
    }
}
exports.getContactByid = async(req,res)=>
{
    try{
        const id = req.params.id
        const contact = await Contact.findById(id)
        if(!contact){
            res.status(404)
            throw new Error("Contact not found")
        }
        res.status(200).json({
            success:true,
            contact:contact,
            "message":"Contact fetched Successfully !"
        })
    }
    catch(err)
    {
        res.status(404).json({
            success:false,
            message:"Contact Not Found",
            error:err
        }) 
    }
}