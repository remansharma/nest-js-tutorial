# nest-js-tutorial
Trying NestJs with typescript 

# cli docs
https://docs.nestjs.com/cli/overview

# Nest.js Full Course for Beginners | Complete All-in-One Tutorial | 3 Hours
https://www.youtube.com/watch?v=8_X0nSrzrCw

# Fire
https://www.youtube.com/watch?v=0M8AYU_hPas


# NestJS Project Structure
https://github.com/CatsMiaow/nestjs-project-structure


# NestJS LinkedIn Tutorial (Project Structure)
https://linkedin.com/pulse/nestjs-project-structure-architecture-demo-becerra-monsalve-m-c-s-3ngge

# Lib Installed
npm install -g sequelize
npm install --save sequelize sequelize-typescript pg-hstore pg
npm install --save-dev @types/sequelize
npm install dotenv --save

nest generate module /core/database

Nest provides a @nestjs/config package out-of-the-box to help load our .env file. To use it, we first install the required dependency.
npm i --save @nestjs/config

nest generate module /modules/users
nest generate service /modules/users

nest generate module /modules/auth
nest generate service /modules/auth

nest g co /modules/auth
This will automatically add this controller to the Auth module.
Note: g is an alias for generate and co is for controller.


npm install --save @nestjs/passport passport passport-local
npm install --save-dev @types/passport-local
npm install bcrypt --save

npm install @nestjs/jwt passport-jwt
npm install @types/passport-jwt --save-dev