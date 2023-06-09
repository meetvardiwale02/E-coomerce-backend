const db = require("../models");

const setModel = (model)=>{
    this.model = model
}

const getModel = ()=>{
    return this.model
}

module.exports = {
    setModel,
    getModel,
    verifyCustomer : async(email)=>{
        console.log("repository data");
     
        
        const getOneData = await getModel().findOne({ where : { email : email}})

        console.log("databse data", getOneData);
        return getOneData
        
    }
}