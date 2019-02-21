module.exports = [
    {
        "name": "default",
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "local",
        "database": "devDB",
        "synchronize": false,
        "entities": [
            "./entity/*.ts"
        ],
        "migrations": [
            "./migrations/*.ts"
        ],
        "cli": {
            "entitiesDir": "./entity",
            "migrationsDir": './migrations',
        }
    },
    {
        "name": "seed",
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "local",
        "database": "devDB",
        "synchronize": false,
        "entities": [
            "./entity/*.ts"
        ],
        "migrationsTableName": "seeds",
        "migrations": [
            "./seeds/*.ts"
        ],
        "cli": {
            "entitiesDir": "./entity",
            "migrationsDir": "./seeds"
        }
    }
]