const Cube = require('../models/Cube.js');

const cubeDb = [
    {
        name: 'Mirror Cube',
        description: 'Some mirror cube',
        imageUrl: 'https://rubik.bg/2203-large_default/magicheski-pyzel-shengshou-mirror-blocks-3x3x3-srebrist.jpg',
        difficulty: '4'
    }
];

const getAll = () => cubeDb.slice();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty)

    cubeDb.push(cube);
};

const cubeService = {
    create,
    getAll
};

module.exports = cubeService;