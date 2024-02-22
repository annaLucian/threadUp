
const CardProduct = {
    getProduct : async () => {
        let response = await fetch("https://api-portfolio-beta.vercel.app/skills");
        let products = await response.json();
        return products;
    },
    getSkill: async (id) => {
        const response = await fetch (`https://api-portfolio-beta.vercel.app/skills/${id}`);
        const skill = await response.json();
        return skill;
    }
  };