const API = "https://threadup-iajq.onrender.com/inicio";

const cardProduct = {
  getProducts: async () => {
    let response = await fetch(API);
    let products = await response.json();
    return products;
  },

  getProductById: async (id) => {
    let response = await fetch(`${API}/${id}`);
    console.log({ id, api: `${API}/${id}`, response });
    let product = await response.json();
    return product;
  },
};

export default cardProduct;
