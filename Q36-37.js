const make_shirt = (size, message) => {
  console.log("Shirt size: " + size + ". Message: " + message);
};
make_shirt("XS", "Relax! Peoples are colorful!");

//updated
function make_shirtUpdate(size = "L", message = "I love JavaScript") {
  console.log("Shirt size: " + size + ". Message: " + message);
}
make_shirtUpdate();
make_shirtUpdate("M");
make_shirtUpdate("XL", "You are amazing!");
