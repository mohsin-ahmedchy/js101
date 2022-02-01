'use strict'

// Default Parameter:
const bookings = [];

const createBooking = function(flightName,passengers=23,seats=100){


    const booking = {
        flightName,
        passengers,
        seats
    };

    console.log(booking);

    bookings.push(booking);
}

createBooking('LH101',34,100);
createBooking('LH101',3);
createBooking('LH101',undefined,3);

console.log(bookings);
console.log(bookings[0]);