import { Router } from 'express'
import  categoryModel  from "../../models/categories";
import { Cors } from 'cors'
const router = Router()
let cors = Cors()
let corsOptions = {
  origin: 'http://localhost:8080/',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

/* GET categories listing. */
router.get('/categories/', cors(corsOptions), function (req, res, next) {
  categoryModel.getAllCategories((err, data) => {
    res.status(200).json(data);
  });
})

/* GET categories by ID. */
router.get('/categories/:id', cors(corsOptions), function (req, res, next) {
  const id = parseInt(req.params.id)
  categoryModel.getCategoryById(id,(err, data) => {
    res.status(200).json(data);
  });
})

/* CREATE new category. */
router.post('/categories/add', cors(corsOptions), function (req, res, next) {
  console.log(req)
 // categoryModel.addCategory(id,(err, data) => {
 //   res.status(200).json(data);
 // });
})

export default router
