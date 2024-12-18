import express, {Application} from 'express';
import userRoutes from './examples/routes/user.routes';
import {generateSwaggerDocs} from "./doc-generator";
import path from "node:path";
import fs from "fs";
import swaggerUi from "swagger-ui-express";
import {swaggerSpec} from "./doc-api"; // Importa a configuração do Swagger

const app: Application = express();
const PORT = 3000;

// Rota para a documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/api', userRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

//     // Caminho para as rotas
//     const routesPath = path.resolve(__dirname, './routes/user.routes.ts');
//
//     // Gerar documentação
//     const swaggerComments = generateSwaggerDocs(routesPath);
//
// // Escrever em um arquivo ou exibir no console
//     const outputFile = path.resolve(__dirname, './swaggerComments.ts');
//     fs.writeFileSync(outputFile, swaggerComments, 'utf-8');
//
//     console.log('Swagger comments generated!');
});
