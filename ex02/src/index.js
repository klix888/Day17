const MY_CAR = {
    wheels: 4,
    cylinders: 4,
    size: 2.2
};

function main(myCar) {

    const cylinders = MY_CAR.cylinders;
    const size = MY_CAR.size;

    return { cylinders, size };
}

console.log(main(MY_CAR));

module.exports = main;