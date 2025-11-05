# Database - MongoDB con Seeder

MongoDB con script de inicialización que crea la base de datos y 3 comentarios de ejemplo.

## Build Local

```bash
docker build -t comments-database:local .
docker run -p 27017:27017 comments-database:local
```

## Datos Iniciales

El script `init-mongo.js` crea:
- Base de datos: `comments_db`
- Colección: `comments`
- 3 comentarios de ejemplo

## Verificar

```bash
docker exec -it <container_id> mongosh
use comments_db
db.comments.find()
```
