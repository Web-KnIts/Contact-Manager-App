const Contact = require('../model/contactModel');

exports.deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found"
            });
        }
        await Contact.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            contact: contact,
            message: "Contact deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error deleting contact",
            error: err.message
        });
    }
};
