// Define the MenuItem model
class MenuItemModel {
  constructor(id, name, description, price, category, restaurante_id) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.restaurante_id = restaurante_id;
  }
}

module.exports = MenuItemModel;
