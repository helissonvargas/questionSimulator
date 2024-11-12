const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/questionSimulator');
    console.log('Connectou ao Mongoose!');
}

main().catch((err) => console.log(err))

module.exports = mongoose