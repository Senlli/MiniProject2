import Item from '../models/itemModel.js';

// GET all items
export const getItems = async (req, res) => {
    const items = await Item.find();
    res.json(items);
};

// POST create item
export const createItem = async (req, res) => {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
};

// PUT update item
export const updateItem = async (req, res) => {
    const { id } = req.params;
    const updatedItem = await Item.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.json(updatedItem);
};

// DELETE item
export const deleteItem = async (req, res) => {
    const { id } = req.params;
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted' });
};