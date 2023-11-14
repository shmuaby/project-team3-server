import express from "express";
import {
  handleGetCategories,
  handleGetCategory,
} from "../controllers/categoriesControllers";
const router = express.Router();

router.get("/", handleGetCategories);
router.get("/:id", handleGetCategory);

export default router;
