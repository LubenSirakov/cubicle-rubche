const Cube = require('../models/Cube.js');
const Accessory = require('../models/Accessory.js');

const getAll = () => Cube.find({}).lean();

const getOne = (id) => Cube.findById(id).populate('accessories').lean();

const create = (name, description, imageUrl, difficulty, userId) => {
    let cube = new Cube({
        name,
        description,
        imageUrl,
        difficulty,
        creator: userId
    });

    return cube.save();
};

const search = async (text, from, to) => {
    let result = await getAll();

    if (text) {
        result = result.filter(x => x.name.toLowerCase().includes(text.toLowerCase()))
    }

    if (from) {
        result = result.filter(x => x.difficulty >= from);
    }

    if (to) {
        result = result.filter(x => x.difficulty <= to);
    }

    return result;
};

const attachAccessory = async (cubeId, accessoryId) => {
    let cube = await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);

    return cube.save();
};

const deleteOne = (cubeId) => Cube.findByIdAndDelete(cubeId);

const updateOne = (cubeId, cube) => Cube.findByIdAndUpdate(cubeId, cube, {runValidators: true});

const cubeService = {
    create,
    getAll,
    getOne,
    search,
    attachAccessory,
    deleteOne,
    updateOne
};

module.exports = cubeService;