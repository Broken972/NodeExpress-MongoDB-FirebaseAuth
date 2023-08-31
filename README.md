# NodeExpress-MongoDB-FirebaseAuth (English) / NodeExpress-MongoDB-FirebaseAuth (Francais)

<br>
<br>
<div align="center">
    <strong>🚀 Backend API with Node.js, Express, MongoDB, and Firebase Auth 🚀</strong>
</div>
<br>
<br>

## 📝 Description

This project is a backend application built with Node.js, Express, MongoDB, and Firebase. It provides the foundation for a user management API, including creating, updating, retrieving, and deleting users.
<br>
<br>

## 📚 Table of Contents

-   [Installation](#installation)
-   [Configuration](#configuration)
-   [Usage](#usage)
-   [Project Structure](#project-structure)
-   [Contributions](#contributions)
    <br>
    <br>

## 🛠 Installation

1. Clone this repository:

```bash
    git clone https://github.com/Broken972/NodeExpress-MongoDB-FirebaseAuth.git
```

2. Install the dependencies:

```bash
    npm install
```

<br>

## ⚙️ Important Configuration

1. Ensure that you have a valid serviceAccountKey.json file located in the /firebase directory. This file is crucial for the proper operation of the application. If you don't have it yet, you can download it from the Firebase console. Without this file, the application is likely to terminate unexpectedly.

2. Set up your MongoDB database by editing the /db/mongoose.js file.

3. The .env file is typically pre-configured with functional examples for each entry, making it easy for you to understand and set up.

## 🚀 Usage

3. To start the server :

Production :

```bash
    npm run start
```

Development :

```bash
    npm run dev
```

<br>

## 📂 Project Structure

`./app.js`: Application entry point.

./db/mongoose.js: MongoDB database configuration.

./firebase: Contains Firebase configuration and authentication keys.

./http: Contains routes and handlers for user management.

./middleware: Contains middleware for security and authentication.

./models: Data models for MongoDB.

./usercases: Business logic for user management.
<br>
<br>

## 🤝 Contributions

Contributions are welcome! Please open an issue or submit a pull request.

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////FRANCAIS////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

# NodeExpress-MongoDB-FirebaseAuth (Francais)

<br>
<br>
<div align="center">
    <strong>🚀 Backend API avec Node.js, Express, MongoDB et Firebase Auth 🚀</strong>
</div>
<br>
<br>

## 📝 Description

Ce projet est une application backend construite avec Node.js, Express, MongoDB et Firebase. Il fournit les bases d'une API pour la gestion des utilisateurs, y compris la création, la mise à jour, la récupération et la suppression des utilisateurs.
<br>
<br>

## 📚 Table des matières

-   [Installation](#installation)
-   [Configuration](#configuration)
-   [Utilisation](#utilisation)
-   [Structure du projet](#structure-du-projet)
-   [Contributions](#contributions)
    <br>
    <br>

## 🛠 Installation

1. Clonez ce dépôt :

```bash
    git clone https://github.com/Broken972/NodeExpress-MongoDB-FirebaseAuth.git
```

2. Installez les dépendances :

```bash
    npm install
```

<br>

## ⚙️ Configuration tres important

1. Assurez-vous d'avoir un fichier serviceAccountKey.json valide dans le répertoire /firebase. Ce fichier est essentiel pour le bon fonctionnement de l'application. Si vous ne l'avez pas encore, vous pouvez le télécharger depuis la console Firebase. Sans ce fichier, l'application risque de s'arrêter brusquement.

2. Configurez votre base de données MongoDB en modifiant le fichier /db/mongoose.js.

3. Le fichier .env est généralement prêt à l'emploi. Des exemples fonctionnels sont fournis pour chaque entrée, vous permettant de comprendre et de configurer facilement.

## 🚀 Utilisation

3. Pour démarrer le serveur :

Production :

```bash
    npm run start
```

Developpement :

```bash
    npm run dev
```

<br>

## 📂 Structure du projet

`./app.js : Point d'entrée de l'application.`

`./db/mongoose.js : Configuration de la base de données MongoDB.`

`./firebase : Contient la configuration Firebase et les clés d'authentification.`

`./http : Contient les routes et les gestionnaires pour la gestion des utilisateurs.`

`./middleware : Contient le middleware pour la sécurité et l'authentification.`

`./models : Modèles de données pour MongoDB.`

`./usercases : Logique métier pour la gestion des utilisateurs.`
<br>
<br>

## 🤝 Contributions

Les contributions sont les bienvenues ! Veuillez ouvrir une issue ou soumettre une pull request.
