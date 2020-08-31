# Open House Backend

## Inicializar proyecto

### Recomendaciones 

> Recomiendo que los pasos 1,3,4 se los realizen en la misma terminal.
> El paso 2 debe ser llevado acabo en otra terminal.



1. Instalar dependencias

```shell script
npm install
```

2. Levantar imagenes del docker.

> En otra terminal

```shell script
docker-compose up
```

3. Exportar credenciales GCP.

```shell script
export GOOGLE_APPLICATION_CREDENTIALS="/<key-path>/<your-key>.json"
```

4. Levantar el servidor web en modo desarrollo.

```shell script
  npm run start:dev
```
