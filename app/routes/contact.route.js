import { Router } from "express";
import * as contacts from "../controller/contact.controller.js";

const router = Router();

router
  .route("/")
  .post(contacts.create)
  .get(contacts.findAll)
  .delete(contacts.deleteAll);
router.get("/favorite", contacts.findAllFavorite);
router
  .route("/:id")
  .get(contacts.findOne)
  .put(contacts.update)
  .delete(contacts.remove);

export default router;
