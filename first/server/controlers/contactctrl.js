const Contact = require("../model/contact")



const submitMessage = async(req,res) => {
    const body = req.body

    try{
        const contactForm = await Contact.create({

            name:body.name,
            email:body.email,
            message:body.message
        })
        res.send({message: "Submitted successfully", data:contactForm})

    }catch(error) {
        res.send({ message: "failed"})

    }
}
module.exports =submitMessage;