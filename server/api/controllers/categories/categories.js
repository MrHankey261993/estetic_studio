import { Router } from 'express'
import  categoryModel  from "../../models/categories";
const router = Router()



/* GET categories listing. */
router.get('/categories/', function (req, res, next) {
  categoryModel.getAllCategories((err, data) => {
    res.status(200).json(data);
  });
})

/* GET categories by ID. */
router.get('/categories/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  categoryModel.getCategoryById(id,(err, data) => {
    res.status(200).json(data);
  });
})

/* CREATE new category. */
router.post('/categories/add', function (req, res, next) {
  let name = req.fields.name
  categoryModel.addCategory(name,(err, data) => {
    res.status(200).json(data);
  });
})

export default router
