db = db.getSiblingDB('comments_db');

db.comments.insertMany([
  {
    author: "Juan Pérez",
    text: "Este es el primer comentario del sistema",
    createdAt: new Date()
  },
  {
    author: "María García",
    text: "Excelente implementación con OpenShift",
    createdAt: new Date()
  },
  {
    author: "Carlos López",
    text: "Me gusta la arquitectura de microservicios",
    createdAt: new Date()
  }
]);

print("Database initialized with sample comments");
