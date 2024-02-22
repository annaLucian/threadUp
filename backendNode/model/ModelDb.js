import dbhackaton from "../database/db.cjs";

import { DataTypes } from "sequelize";

const TableModel= dbhackaton.define('products', {
    productName: {type:DataTypes.STRING},
    gender: {type:DataTypes.STRING},
    brand: {type:DataTypes.STRING},
    type: {type:DataTypes.STRING},
    color: {type:DataTypes.STRING},
    size: {type:DataTypes.STRING},
    price: {type:DataTypes.NUMBER},
    image:{type:DataTypes.STRING},
    availability:{type:DataTypes.BOOLEAN},
    description:{type:DataTypes.STRING}
})

export default TableModel