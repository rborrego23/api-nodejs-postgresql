[README.md](https://github.com/user-attachments/files/29280714/README.md)
EXTRAORDINARIO DESARROLLO WEB CLIENTE

bash
git clone https://github.com/rborrego23/api-nodejs-postgresql.git
cd api-nodejs-postgresql

npm install

sql
CREATE DATABASE api_universidad;


Hacer .env propio
DB_NAME=api_universidad
DB_USER=postgres
DB_PASSWORD=tu_password
DB_HOST=127.0.0.1
DB_PORT=5432
PORT=3000
JWT_SECRET=secreto123

bash
npm run dev

Auth (sin token)

- POST /api/auth/register
- POST /api/auth/login

Usuarios, categorias y productos (necesitan token)

- GET /api/users
- GET /api/users/:id
- POST /api/users
- PUT /api/users/:id
- DELETE /api/users/:id

- GET /api/categories
- GET /api/categories/:id
- POST /api/categories
- PUT /api/categories/:id
- DELETE /api/categories/:id

- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id

usar el token

hacer login en /api/auth/login, eso devuelve un token. Despues en cada peticion a las rutas protegidas hay que agregar en los headers:

Authorization: Bearer y el token que te dio el login


Crear categoria (con el token en el header):

json
POST /api/categories
{
  "name": "Tecnologia",
  "description": "Articulos de tecnologia"
}


Crear producto:

json
POST /api/products
{
  "name": "Mouse",
  "price": 15.99,
  "stock": 50,
  "categoryId": 1
}

