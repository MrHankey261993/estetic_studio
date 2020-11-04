import { Router } from 'express'
import  userModel  from "../../models/users";
const router = Router()



/* GET user by ID. */
router.get('/test/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  userModel.getUsersById(id,(err, data) => {
    res.status(200).json(data);
  });
  res.status(200).json('fsdafasd');
})

export default router
