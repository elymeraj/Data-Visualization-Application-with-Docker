# Data Visualization Platform with Docker (English)

**Developed by:**
- `Eldis YMERAJ`
- `Redwan OMARI`  
Master's students in Artificial Intelligence at the University of Caen Normandy.

---

## Prerequisites

- **Docker**
- **Docker Compose**
- **Node.js**

---

## Project Launch

### Instructions for Linux (University Machines)

#### Step 1: Configure Docker Aliases
```bash
alias docker='sudo -g docker docker'
alias docker-compose='sudo -g docker docker-compose'
```

#### Step 2: Start Docker Environment  
Launch all services with Docker Compose:
```bash
docker-compose -f stack.yml up -d --build
```

#### Step 3: Import Data into MongoDB  
Load the initial data into MongoDB using the following command:
```bash
docker exec -i mongo-dev sh -c 'mongoimport -d bda -c sales --authenticationDatabase admin -u root -p example' < ui/data/sales.bson
```

#### Step 4: Access the Following Services:

- Front-end Application: `http://localhost`
- GraphQL API: `http://localhost:4000`
- **Mongo Express:** `http://localhost:8081`  
  - Username: `root`  
  - Password: `example`

---

### Instructions for Other Machines

#### Step 1:
- Download the project folder
- Open Docker
- Navigate to the root of the project in your terminal

#### Step 2:
Launch all services with Docker Compose:
```bash
docker-compose -f stack.yml up -d --build
```

#### Step 3:
Load the initial data into MongoDB using the following command:
```bash
docker exec -i mongo-dev sh -c 'mongoimport -d bda -c sales --authenticationDatabase admin -u root -p example' < ui/data/sales.bson
```

#### Step 4: Access the Following Services:

- Front-end Application: `http://localhost`
- GraphQL API: `http://localhost:4000`
- **Mongo Express:** `http://localhost:8081`  
  - Username: `root`  
  - Password: `example`

---

## Project Structure
```bash
CC_VISUALISATION_DONNEES_DOCKER/
├── README.md
├── membres.txt
├── graphql/
│   ├── Dockerfile
│   ├── index.js
│   ├── model.graphql
│   ├── package.json
│   └── resolvers.js
├── stack.yml
├── tp8.md
└── ui/
    ├── css/
    │   ├── colorbrewer.css
    │   ├── style.css
    │   └── test.js
    ├── data/
    │   ├── countries.json
    │   ├── departments.json
    │   ├── population.csv
    │   ├── population.json
    │   └── sales.bson
    ├── departements.html
    ├── france.html
    ├── index.html
    ├── js/
    │   ├── barChart.js
    │   ├── d3.min.js
    │   ├── d3.v7.min.js
    │   ├── dataDisplay.js
    │   ├── dataGraph.js
    │   └── graphqlQueries.js
    ├── prestation.html
    └── regions.html
```

---

## Docker Container Management

**Start containers:**
```bash
docker-compose -f stack.yml up -d
```

**Stop containers:**
```bash
docker-compose -f stack.yml down
```

**Rebuild and start containers:**
```bash
docker-compose -f stack.yml up -d --build
```

**Access a running container:**
```bash
docker exec -it mongo-dev bash
```


--
# Plateforme de Visualisation de Données avec Docker (Français)

**Travaillé par:**
- `Eldis YMERAJ`
- `Redwan OMARI`
- Étudiants en Master Intelligence Artificielle à l’Université de Caen Normandie.
---

## Prérequis

- **Docker** 
- **Docker Compose** 
- **Node.js** 

---

## Lancement du Projet

### Instructions pour Linux (Machines de l'École)

### Étape 1 : Configurer les alias Docker
```bash
alias docker='sudo -g docker docker'
alias docker-compose='sudo -g docker docker-compose'
```

### Étape 2 : Lancer l'Environnement Docker
lancez tous les services avec Docker Compose :
```bash
docker-compose -f stack.yml up -d --build
```

### Étape 3 : Importer les Données dans MongoDB
Chargez les données initiales dans MongoDB avec la commande suivante :
```bash
docker exec -i mongo-dev sh -c 'mongoimport -d bda -c sales --authenticationDatabase admin -u root -p example' < ui/data/sales.bson
```

### Étape 4: Accéder aux Services suivantes:

- Application Front-end : `http://localhost`
- API GraphQL : `http://localhost:4000`
- **Mongo Express :** `http://localhost:8081`
  - Login : root
  - Mot de passe : example

---

### Pour les autres machines:
### Étape 1 : 
- Téléchargez le dossir du projet
- Ouvriez docker
- mettez vous dans la racine du projet


### Étape 2 :
lancez tous les services avec Docker Compose :
```bash
docker-compose -f stack.yml up -d --build
```


### Étape 3 : 
Chargez les données initiales dans MongoDB à l'aide de la commande suivante :
```bash
docker exec -i mongo-dev sh -c 'mongoimport -d bda -c sales --authenticationDatabase admin -u root -p example' < ui/data/sales.bson
```

### Étape 4: Accéder aux Services suivantes:

- Application Front-end : `http://localhost`
- API GraphQL : `http://localhost:4000`
- **Mongo Express :** `http://localhost:8081`
  - Login : root
  - Mot de passe : example
---


### Structure du Projet
```bash
CC_VISUALISATION_DONNEES_DOCKER/
├── README.md
├── membres.txt
├── graphql/
│   ├── Dockerfile
│   ├── index.js
│   ├── model.graphql
│   ├── package.json
│   └── resolvers.js
├── stack.yml
├── tp8.md
└── ui/
    ├── css/
    │   ├── colorbrewer.css
    │   ├── style.css
    │   └── test.js
    ├── data/
    │   ├── countries.json
    │   ├── departments.json
    │   ├── population.csv
    │   ├── population.json
    │   └── sales.bson
    ├── departements.html
    ├── france.html
    ├── index.html
    ├── js/
    │   ├── barChart.js
    │   ├── d3.min.js
    │   ├── d3.v7.min.js
    │   ├── dataDisplay.js
    │   ├── dataGraph.js
    │   └── graphqlQueries.js
    ├── prestation.html
    └── regions.html
```

### Gestion des Conteneurs Docker

***Démarrer les conteneurs :***
```bash
docker-compose -f stack.yml up -d
```

***Arrêter les conteneurs :***
```bash
docker-compose -f stack.yml down
```

***Recréer et démarrer les conteneurs :***
```bash
docker-compose -f stack.yml up -d --build
```

***Accéderà un conteneur en cours d'exécution :***
```bash
docker exec -it mongo-dev bash
```
---