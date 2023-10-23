import express from 'express';
import { agregarProfesor, obtenerProfesores, obtenerProfesor, actualizarProfesor, eliminarProfesor } from '../controllers/profesorController.js';

const router = express.Router();

router.route('/')
    .post(agregarProfesor)
    .get(obtenerProfesores);

router.route('/:id')
    .get(obtenerProfesor)
    .put(actualizarProfesor)
    .delete(eliminarProfesor);

export default router;