<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Proyecto de Gestión Médica

## Descripción:
Baby Care Clinic es una clínica pediátrica que ofrece servicios de atención médica especializada para niños y bebés de 0 a 12 años. Estamos en proceso de desarrollo de una aplicación backend que complementará nuestra aplicación móvil. Nuestro objetivo es brindar una experiencia eficiente y segura a nuestros usuarios, facilitando la administración de citas médicas, historiales de pacientes y otros aspectos esenciales de nuestra clínica.

## Problemas a Solucionar:

1. **Crear un sistema de autenticación y autorización más robusto para el personal médico.**
2. **Desarrollar endpoints para gestionar la historia médica de los pacientes.**
3. **Implementar un sistema de búsqueda de pacientes y citas.**
4. **Configurar un servicio de mensajería para notificar a los pacientes sobre cambios en sus citas.**
5. **Desarrollar un sistema de generación de informes médicos para el personal médico.**
6. **Configurar un servidor en Docker para el despliegue de la API.**

## Objetivos:

- Desarrollar una API backend sólida utilizando Nest.js y PostgreSQL.
- Implementar autenticación avanzada utilizando tokens JWT y roles de usuario.
- Configurar una estructura de base de datos más compleja para pacientes, médicos y citas.
- Desarrollar endpoints para la gestión de historias médicas y búsqueda de pacientes.
- Integrar un sistema de mensajería en tiempo real utilizando Socket.IO.
- Implementar un sistema de generación de informes médicos personalizados.
- Proporcionar documentación detallada sobre el funcionamiento de la API.

## Requerimientos:

- Utilizar Nest.js y PostgreSQL como base para el desarrollo backend.
- Implementar autenticación avanzada con roles de usuario utilizando tokens JWT.
- Desarrollar endpoints para la gestión de historias médicas y búsqueda de pacientes.
- Configurar Socket.IO para habilitar la mensajería en tiempo real.
- Integrar Docker para el despliegue de la API en contenedores.
- Desarrollar endpoints para la generación de informes médicos.
- Proporcionar documentación detallada sobre los endpoints y el uso de la API.

## Entregables:

- API backend completa con endpoints para gestión de pacientes, citas e historias médicas.
- Autenticación avanzada implementada con tokens JWT y roles de usuario.
- Base de datos PostgreSQL con estructura compleja para pacientes, médicos y citas.
- Sistema de mensajería en tiempo real utilizando Socket.IO.
- Funcionalidad de generación de informes médicos personalizados.
- Documentación exhaustiva que explique cada uno de los endpoints y su uso.

## Estructura de la Base de Datos:

### Usuarios:
- ID (Número único)
- Nombre
- Correo electrónico
- Contraseña (hash)

### Pacientes:
- ID (Número único)
- Nombre
- Edad
- Correo electrónico
- Teléfono

### Médicos:
- ID (Número único)
- Nombre
- Especialidad
- Correo electrónico

### Citas:
- ID (Número único)
- Fecha y hora
- ID del paciente
- ID del médico
- Observaciones médicas

## Referencia de proyecto:
[Proyecto de Gestión Médica](https://iquela.web.app/proyectos/proyecto/L2AWaB7Ibse8Q3KlP9JV)


## Endpoints:

- `POST /api/auth/register`: Registro de nuevos usuarios (médicos o pacientes).
- `POST /api/auth/login`: Inicio de sesión para usuarios con roles de médico o paciente (autenticación JWT).
- `GET /api/patients`: Consulta de lista de pacientes.
- `GET /api/patients/:id`: Consulta de detalles de un paciente.
- `POST /api/appointments`: Creación de nuevas citas.
- `GET /api/appointments`: Consulta de citas programadas.
- `GET /api/doctors`: Consulta de lista de médicos.
- `POST /api/reports/:patientId`: Generación de informes médicos para un paciente específico.
- `GET /api/messages/:userId`: Consulta de mensajes en tiempo real para un usuario.


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
