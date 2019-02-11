let restaurant = {
  name: "Keto Burgers",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function(partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;

    return partySize <= seatsLeft;
  },
  seatParty: function(partySize) {
    if (this.guestCount < this.guestCapacity) {
      this.guestCount += partySize;
      return console.log("Party added");
    } else {
      return console.log("Restaurant is at capacity");
    }
  },
  removeParty: function(partySize) {
    this.guestCount -= partySize;
    return console.log("Party removed");
  }
};

// seatParty
restaurant.seatParty(70);
console.log(restaurant.checkAvailability(10));
// removeParty
restaurant.removeParty(10);
console.log(restaurant.checkAvailability(10));
