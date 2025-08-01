import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    description: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

const Item = mongoose.model('Item', itemSchema);

export default Item;