import UserInterface from "../interfaces/CategoryInterface";
import { getCategories, getCategory } from "../services/categoriesApiService";
import { handleError } from "../../utils/handleErrors";
import userValidation from "../models/joi/userValidation";
import { Request, Response } from "express";

export const handleGetCategories = async (req: Request, res: Response) => {
  try {
    const categories = await getCategories();
    return res.send(categories);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleGetCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await getCategory(id);
    return res.send(category);
  } catch (error) {
    handleError(res, error);
  }
};
