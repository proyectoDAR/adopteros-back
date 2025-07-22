# API Adopteros

**Setup:

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

Eliminar el contenedor y sus volúmenes

```sh
docker compose down -v
```

Al ejecutar el proyecto en modo desarrollo también se creará una instancia de la base de datos

```sh
npm run start:dev
```