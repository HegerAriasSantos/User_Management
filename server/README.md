
# Backend 

Este es un proyecto para una prueba tecnica. 


## Getting started

### `npm Install`

Para instalar todos los paquetes requeridos para el funcionamiento de la api

### `npm run dev`

Para correr la aplicacion en modo desarrollador.\
* Endpoint: [http://localhost:3002](http://localhost:3002).

## API Reference

#### Obtener todas las tareas

```http
  GET /tasks/
```

#### Obtener una tarea especifica

```http
  GET /tasks/${id}
```

#### Para subir una tarea

```http
  POST /tasks/
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. |
| `title`      | `string` | **Required**. |
| `description`      | `string` | **Required**. |


#### Para modificar una tarea

```http
  POST /tasks/
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Id`      | `ID` | **Required**. |
| `name`      | `string` | **Required**. |
| `title`      | `string` | **Required**. |
| `description`      | `string` | **Required**. |


#### Para eliminar una tarea

```http
  DELETE /tasks/
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `ID` | **Required**. |



#### Para registrar a un usuario
```http
  POST /user/register
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. |
| `password`      | `string` | **Required**. |

#### Para iniciar session

```http
  POST /user/login
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. |
| `password`      | `string` | **Required**. |

#### Para obtener todo el historial de los usuarios de la api

```http
  GET /logs/
```



