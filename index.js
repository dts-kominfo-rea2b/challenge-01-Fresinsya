// TODO: Buatlah data dari kedua user di sini
const color = new Set();
    color.add("Yellow");
    color.add("Pink");
    color.add("White"); 
    color.add("Purple");

const resto = new Set(["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]);

const edu = {
    sd : {
        "Name" : "SD 01",
        "City" : "Jakarta",
        "Graduate" : "2016",
    
    },
    smp : {
        "Name" : "SMP 02",
        "City" : "Jakarta",
        "Graduate" : "2019",
    },
    sma : {
        "Name" : "SMA 03",
        "City" : "Tangerang",
    },
}
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name : "Monica",
    gender : "Female",
    age : 17,
    email : "monica@dingdong.com",
    isHavePet : true,
    favoriteColor : color,
    education : edu,
    favoriteRestaurant : resto,

};

// const secondUser = {};
const color1 = new Set();
    color1.add("Blue");
    color1.add("Black");
    color1.add("Grey"); 


const resto1 = new Set(["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]);

const edu1 = {
    sd : {
        "Name" : "SD 02",
        "City" : "Jakarta",
        "Graduate" : "2010",
    
    },
    smp : {
        "Name" : "SMP 03",
        "City" : "Bogor",
        "Graduate" : "2013",
    },
    sma : {
        "Name" : "SMA 01",
        "City" : "Surabaya",
        "Graduate" : "2016",
    },
};
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const secondUser = {
    nama : "Wendy",
    gender : "Male",
    age : 23,
    email : "wendy@dingdong.com",
    pet : false,
    favcolor : color1,
    education : edu1,
    restaurant : resto1,

};
// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
    users.push(firstUser);
    users.push(secondUser);
// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};