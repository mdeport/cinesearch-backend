## Informations requises sur le projet

- la techno utiliser dans le projet est Node.js
- les langages principale utiliser dans le projet sont JavaScript.

- toutes les requetes a tester dans thunder client ou postman sont dans le fichier app.http

Le projet est l'utilisateur va pourvoir si il est autentifier ajouter des pizza, en modifier, en rechercher et en supprimer.
Puis le but est de recevoir des commande avec les informations des pizza et de l'user qui a passer la commande.

Dans le fichier Donnees_Dans_BDD.md il y a des images de ma BDD relié a mon project.

les dependances du projet sont :

- express
- mongoose
- dotenv
- jsonwebtoken
- swagger-jsdoc
- swagger-ui-express
- multer
- jest
- supertest

Les routes sont present dans les fichier present dans le dossier routes.
elle represente les routes de l'api:

- /signin
- /signup
- /pizza
- /pizza/:id
- /commandes
- /commandes/:id

## A rendre

Une API REST avec NodeJS et ExpressJS :

- [x] Créer un projet NodeJS
- [x] Installer ExpressJS
- [x] Creer un serveur ExpressJS
- [x] Installer Mongoose et se connecter à une base de données MongoDB
- [x] Organiser son projet avec des routes et des middlewares
- [x] Utiliser le pattern MVC
- [x] Créer une authentification avec JWT
- [x] Proteger une route (creation d'un middleware qui verifie le token)
- [x] Mettre en place une API DOC avec Swagger
- [x] Gerer les erreurs avec un middleware

- [x] Creer un fichier Readme.md qui explique le projet, comment l'installer, comment l'utiliser, les dépendances, les routes, etc.

- [x] Avec Jest et superTest, creer des tests unitaires et d'integration pour les routes et les middlewares, une de vos series de tests doit representer un exemple d'utilisation de l'API depuis un hypothetique client. Concretement, si votre application permet a des utilisateurs authentifier d'acheter des articles voici un exemple de liste d'endpoints a tester de facon successive pour effectuer un test d'achat:

- POST /auth/login

- POST /panier/add

- POST /panier/checkout

- POST /order

- [x] Ajoutez une fonctionnalité qui fait intervenir la possibilités d'upload de fichiers (images, pdf, etc) et ajoutez des tests pour cette fonctionnalité.
