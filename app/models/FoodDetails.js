const mongoose = require('mongoose');

const FoodDetailsSchema = mongoose.Schema({
    itemId: String,
    itemName: String
});

module.exports = mongoose.model('FoodDetails', FoodDetailsSchema);