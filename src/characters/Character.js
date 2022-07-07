const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Character = mongoose.model("Character", CharacterSchema, "characters")

module.exports = Character;