import dbhackaton from "../database/db.cjs";

import { DataTypes } from "sequelize";

const TableModel= dbhackaton.define('products', {
    productName: {type:DataTypes.STRING},
    genero: {type:DataTypes.STRING},
    brand: {type:DataTypes.STRING},
    type: {type:DataTypes.STRING},
    color: {type:DataTypes.STRING},
    size: {type:DataTypes.STRING}

    
       

})

export default TableModel