import fs from 'fs';

// Função para gerar documentação Swagger
export const generateSwaggerDocs = (routesFile: string) => {
    const fileContent = fs.readFileSync(routesFile, 'utf-8');

    const regex = /router\.(get|post|put|delete|patch)\(['"](.+?)['"],\s*(\w+)/g;
    const swaggerDocs: string[] = [];

    let match;
    while ((match = regex.exec(fileContent)) !== null) {
        const [_, method, path, controllerFunction] = match;

        // Gera a estrutura Swagger
        const swaggerComment = `
/**
 * @swagger
 * ${path}:
 *   ${method}:
 *     summary: [Generated] ${controllerFunction}
 *     description: [Automatically generated documentation for ${controllerFunction}].
 *     responses:
 *       200:
 *         description: Successful operation.
 */
    `.trim();

        swaggerDocs.push(swaggerComment);
    }

    return swaggerDocs.join('\n\n');
}

// // Função para gerar documentação Swagger
// export const generateSwaggerDocs = (routesFile: string) => {
//     const fileContent = fs.readFileSync(routesFile, 'utf-8');
//
//     const regex = /router\.(get|post|put|delete|patch)\(['"](.+?)['"],\s*(\w+)/g;
//     const swaggerDocs: string[] = [];
//
//     let match;
//     while ((match = regex.exec(fileContent)) !== null) {
//         const [_, method, path, controllerFunction] = match;
//
//         // Gera a estrutura Swagger
//         const swaggerComment = `
// /**
//  * @swagger
//  * ${path}:
//  *   ${method}:
//  *     summary: [Generated] ${controllerFunction}
//  *     description: [Automatically generated documentation for ${controllerFunction}].
//  *     responses:
//  *       200:
//  *         description: Successful operation.
//  */
//     `.trim();
//
//         swaggerDocs.push(swaggerComment);
//     }
//
//     return swaggerDocs.join('\n\n');
// }
