

//1
let numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados() {
    return numbers.map(item => item ** item);
}


//2
let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']
let result2 = foodList.map((comida, i) => {
    let pais = ['Italia', 'Japón', 'Valencia']

    if (i <= 2) {
        return `Como soy de ${pais[i]}, amo comer ${comida}`;
    } else {
        return `Aunque no como carne, el ${comida} es sabroso`;
    }
})


//3
const staff = [
    {
        name: "Pepe",
        role: "The Boss",
        hobbies: ["leer", "ver pelis"],
    },
    {
        name: "Ana",
        role: "becaria",
        hobbies: ["nadar", "bailar"],
    },
    {
        name: "Luis",
        role: "programador",
        hobbies: ["dormir", "comprar"],
    },
    {
        name: "Carlos",
        role: "secretario",
        hobbies: ["futbol", "queso"],
    },
];
let result3 = staff.map(item => item.name + " es " + item.role + " y le gusta " + item.hobbies[0] + " y " + item.hobbies[1]);

//let result3 = staff.map(personas => `${personas.name} es ${personas.role} y le gusta ${personas.hobbies[0]} y ${personas.hobbies[1]}`);


//4
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result4 = numbers2.filter((impar) => impar % 2 != 0);




//5
const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }];

let veggie = foodList2.filter((comida) => comida.isVeggie === true);
let result5 = veggie.map((item, i) => {
    if (i == 0) {
        return `Que rico ${item.name} me voy a comer!`;
    } else {
        return `Que rica ${item.name} me voy a comer!`;
    }
});


//6
const inventory = [
    {
        name: "Mobile phone",
        price: 199,
    },
    {
        name: "TV Samsung",
        price: 459,
    },
    {
        name: "Viaje a Cancún",
        price: 600,
    },
    {
        name: "Mascarilla",
        price: 1,
    },
];

let precio = inventory.filter((item) => item.price > 300);
let result6 = precio.map((mayor300, i) => {
    if (i == 0) {
        return mayor300.name;
    } else {
        return "Viaje a Cancún";
    }
});


//7
const numeros3 = [39, 2, 4, 25, 62];
let result7 = numeros3.reduce((acc, item) => acc * item);


//8
const sentenceElements = [
    "Me",
    "llamo",
    "Annakin",
    "y",
    "quiero",
    "sentir",
    "la",
    "fuerza",
    "con",
    "javascript",
  ];
  
  let result8 = sentenceElements.reduce((acc, item) => acc + " " + item);

  //9
  const books = [
    {
      name: " JS for dummies",
      author: "Emily A. Vander Veer",
      price: 20,
      category: "code",
    },
    {
      name: "Don Quijote de la Mancha",
      author: "Cervantes",
      price: 14,
      category: "novel",
    },
    {
      name: "Juego de tronos",
      author: "George R. Martin",
      price: 32,
      category: "Fantasy",
    },
    {
      name: "javascript the good parts",
      author: "Douglas Crockford",
      price: 40,
      category: "code",
    },
  ];
  
  let code = books.filter((code) => code.category === "code");
  let precioLibro = code.map((precioCode) => precioCode.price);
  let result9 = precioLibro.reduce((acc, item) => acc + item);









