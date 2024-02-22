const API = "https://threadup-iajq.onrender.com/inicio";

const cardProduct = {
  getProducts: async () => {
    let response = await fetch(API);
    let products = await response.json();
    return products;
  },

  getProductById: async (id) => {
    const response = await fetch(`${API}/${id}`);
    const product = await response.json();
    return product;
  },
};

export default cardProduct;
