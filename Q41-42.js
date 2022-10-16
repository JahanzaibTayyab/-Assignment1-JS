//Question 41
const show_magicians = (magiciansArr) => {
  magiciansArr.map((magician) => {
    console.log(magician);
  });
};
magicians = ["Aladdin", "David", "Lalisar", "John"];
show_magicians(magicians);
//Question 42
const make_great = (magiciansArr) => {
  magiciansArr.map((name, index) => {
    magiciansArr[index] = "The Great " + name;
  });
};
make_great(magicians);
show_magicians(magicians);
