import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0', // Versão da API
            description: 'Documentação da API utilizando Swagger.',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

export const swaggerSpec = swaggerJsdoc(options)
