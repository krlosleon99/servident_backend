import Aula from '../models/Aula.js';

const agregarAula = async (req, res) => {

    // Crear nueva instancia de Materia
    const aula = new Aula(req.body);

    // Almacenar el nuevo profesor en la base de datos con try catch
    try {
        const aulaGuardado = await aula.save();
        res.json(aulaGuardado);
    } catch (error) {
        console.log(error);
    }
};

const obtenerAulas = async (req, res) => {
    const aulas = await Aula.find();
	
	res.json(aulas);
};

const obtenerAula = async (req,res) => {
    const { id } = req.params;

    const aula = await Aula.findById(id);

    if(!aula) {
        return res.status(400).json({msg: "No existe aula"});
    }

    res.json(aula);
}

const actualizarAula = async (req,res) => {
    const { id } = req.params;

    const aula = await Aula.findById(id);

    if(!aula) {
        return res.status(400).json({msg: "No existe aula"});
    }

    aula.nombre = req.body.nombre || aula.nombre;

    try {
        const aulaActualizada = await aula.save();
        res.json(aulaActualizada);
    } catch (error) {
        console.log(error);
    }
}

const eliminarAula = async (req,res) => {
    const { id } = req.params;

    const aula = await Aula.findById(id);

    if(!aula) {
        return res.status(400).json({msg: "No existe aula"});
    }

    try {
        await aula.deleteOne();
        res.json({msg: "aula eliminado"});

    } catch (error) {
        console.log(error);
    }
}

export { agregarAula, obtenerAulas, obtenerAula, actualizarAula, eliminarAula };