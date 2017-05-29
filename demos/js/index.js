'use strict';

var aamina = {
    amt: 2000,
    address: {
        province: 'AB',
        city: 'Calgary'
    }
};

var aniqa = Object.create(aamina);
console.log(aniqa.amt);
aamina.amt = 3000;
console.log(aniqa.amt);
aniqa.amt = 480;
console.log(aniqa.amt);
console.log(aamina.amt);

delete aniqa.amt;
console.dir(aniqa);
console.log(aniqa.amt);
console.log(aniqa.address.city);
aniqa.address.city = 'Paris';
console.log(aniqa.address.city);
console.log(aamina.address.city);

