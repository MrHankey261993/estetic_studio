import { Router } from 'express'
import  serviceModel  from "../../models/services";
const router = Router()



/* GET categories listing. */
router.get('/services/', function (req, res, next) {
  serviceModel.getAllServices((err, data) => {
    res.status(200).json(data);
  });
})

/* GET categories by ID. */
router.get('/services/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  serviceModel.getServiceById(id,(err, data) => {
    res.status(200).json(data);
  });
})

/* CREATE new category. */
router.post('/services/add', function (req, res, next) {
  let name = req.fields.name
  serviceModel.addServices(name,(err, data) => {
    res.status(200).json(data);
  });
})

export default router
