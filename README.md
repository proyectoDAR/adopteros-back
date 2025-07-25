# API Adopteros

**Configurar ambiente de desarrollo:**

Crear el archivo .env a partir de .env.example

```sh
cp .env.example .env
```

Completar las variable de entorno

```env
# APP PORT
PORT=

# DOCKER
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
PORTS_DB=
```

Levantar el contenedor

```sh
docker compose up -d
```

Ejecutar las migraciones

```sh
npm run db:migrations
```

Ejecutar en modo desarrollo. También se creará una instancia de la base de datos.

```sh
npm run start:dev
```

Eliminar el contenedor y sus volúmenes

```sh
docker compose down -v
```
