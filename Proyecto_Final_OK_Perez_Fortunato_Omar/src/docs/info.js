export const info = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API News",
            version: "1.0.0",
            description: "Documentacion de API News",
        },
        servers: [
            {
                url: "https://localhost:8080",    
            }
            
        ],
    },
    apis: ["./src/docs/*.yml"],
};
