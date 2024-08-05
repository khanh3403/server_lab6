const mongoose = require('mongoose');
// code 4/4/2024
const local = "mongodb+srv://khanhbnph21056:fT4ZxEqpBPl8GDLS@bnkhanh.gwsggbd.mongodb.net/";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
