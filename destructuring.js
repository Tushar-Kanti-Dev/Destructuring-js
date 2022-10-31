const student = { id: '101 - 01', name: 'John Don', phone: '01201020', profession: 'Developer', address: 'Dhaka', };
const { id, phone, profession, address, name } = student;
// console.log(address, phone, id, name);

const homeDetails = {
    id: 01,
    place: 'Dhaka',
    floor: 2,
    fstfloor: {
        room: 3,
        badroom: 2,
        gaustroom: 1,
        baluni: 3,
        fstfloorprice: '$500'
    },
    scndfloor: {
        room: 4,
        badroom: 3,
        gaustroom: 1
    },
    color: 'white',
    parking: 'has',
    price: '$1200'
};
const {
    floor,
    place,
    price,
    color,
    parking
} = homeDetails;
console.log(place, floor, price, parking);
const { room, badroom, baluni, fstfloorprice } = homeDetails.fstfloor;
console.log(room, badroom, fstfloorprice);