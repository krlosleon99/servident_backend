import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import profesorRoutes from "./routes/profesorRoutes.js";
import materiaRoutes from "./routes/materiaRoutes.js";
import aulaRoutes from "./routes/aulaRoutes.js";

// Creando servidor con express
const app = express();

app.use(express.json());

dotenv.config(); // Buscando el archivo .env automáticamente

conectarDB();

const WHITE_LIST = [ 'http://127.0.0.1:5173', 'http://localhost:5173' ]

const dominiosPermitidos = [ process.env.FRONTEND_URL  ];

const corsOptions = {
    origin: function(origin, callback) {
        if(dominiosPermitidos.indexOf(origin) !== -1) {
            // El origen del request está permitido
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    }
}

// app.use(cors( corsOptions ));

app.use(
    cors({
      origin: WHITE_LIST,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "X-Requested-With",
        "Accept",
        "Origin",
        "x-access-token",
      ],
      maxAge: 3000,
    })
  )

app.use('/api/profesores', profesorRoutes );
app.use('/api/materias', materiaRoutes );
app.use('/api/aulas', aulaRoutes );

const PORT = process.env.PORT || 4000;

// Puerto 4000 para el backend
app.listen(PORT, () => {
    console.log(`Ejecutando servidor en puerto ${PORT}`);
})