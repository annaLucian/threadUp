import  express  from "express";
import {getAllBlogs} from "../controllers/Controller.js";

const router = express.Router()

router.get( '/', getAllBlogs)


export default router