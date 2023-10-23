import Profesor from '../models/Profesor.js';

const agregarProfesor = async (req, res) => {

    // Crear nueva instancia de Materia
    const profesor = new Profesor(req.body);

    // Almacenar el nuevo profesor en la base de datos con try catch
    try {
        const profesorGuardado = await profesor.save();
        res.json(profesorGuardado);
    } catch (error) {
        console.log(error);
    }
};

const obtenerProfesores = async (req, res) => {
    const profesores = await Profesor.find();
	
	res.json(profesores);
};

const obtenerProfesor = async (req,res) => {
    const { id } = req.params;

    const profesor = await Profesor.findById(id);

    if(!profesor) {
        return res.status(400).json({msg: "No existe profesor"});
    }

    res.json(profesor);
    console.log(profesor);
}

const actualizarProfesor = async (req,res) => {
    const { id } = req.params;

    const profesor = await Profesor.findById(id);

    if(!profesor) {
        return res.status(400).json({msg: "No existe profesor"});
    }

    profesor.nombre = req.body.nombre || profesor.nombre;

    try {
        const profesorActualizada = await profesor.save();
        res.json(profesorActualizada);
    } catch (error) {
        console.log(error);
    }
}

const eliminarProfesor = async (req,res) => {
    const { id } = req.params;

    const profesor = await Profesor.findById(id);

    if(!profesor) {
        return res.status(400).json({msg: "No existe profesor"});
    }

    try {
        await profesor.deleteOne();
        res.json({msg: "profesor eliminado"});

    } catch (error) {
        console.log(error);
    }
}

export { agregarProfesor, obtenerProfesores, obtenerProfesor, actualizarProfesor, eliminarProfesor };