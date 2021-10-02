const uniqid = require('uniqid');
class Cube {
    static #cubes = [
        {
            id: 'safafafafsfqfq',
            name: 'Mirror Cube',
            description: 'Some mirror cube',
            imageUrl: 'https://rubik.bg/2203-large_default/magicheski-pyzel-shengshou-mirror-blocks-3x3x3-srebrist.jpg',
            difficulty: '4'
        },
        {
            id: 'g2pcdowku9qs5c9',
            name: 'Ice Cube',
            description: 'Straight outta Compton',
            imageUrl: 'https://i.guim.co.uk/img/media/67eec8ab7e348a4152ff3f0ea2a3fc1060f38e28/493_44_4711_2827/master/4711.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=589f464f44bbf828e4defbc819fabcae',
            difficulty: '5'
        }
    ];

    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    }

    static getAll() {
        return Cube.#cubes.slice();
    }

    static add(cube) {
        Cube.#cubes.push(cube);
    }
}

module.exports = Cube;