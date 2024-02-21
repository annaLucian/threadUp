import dbhackaton from "../database/db.cjs";

import { DataTypes } from "sequelize";

const TableModel= dbhackaton.define('products', {
    genero: {type:DataTypes.STRING},
       

})

export default TableModel