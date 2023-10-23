import express from "express";
import { agregarAula, obtenerAulas, obtenerAula, actualizarAula, eliminarAula } from '../controllers/aulaController.js';
 
const router = express.Router();

router.route('/')
    .post(agregarAula)
    .get(obtenerAulas);

router.route('/:id')
    .get(obtenerAula)
    .put(actualizarAula)
    .delete(eliminarAula);

export default router;