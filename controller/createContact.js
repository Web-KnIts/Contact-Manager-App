const Contact = require('../model/contactModel');

exports.createContact = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            return res.status(400).json({
                message: "Some required fields are missing"
            });
        }

        const contact = await Contact.create({
            name,
            email,
            phone
        });

        res.status(200).json({
            success: true,
            contact: contact,
            message: "Contact created successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message
        });
    }
};
