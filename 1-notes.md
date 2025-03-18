## Notes

### Intro to Databases

### What is a database?
- Stores & retrieves values
- Persists values
- Shares values
- Provides searching of values
- Guarantees safety & consistency
- Supports CRUD operations for single records

#### Types of Databases
- from least structred to most structured

##### Key-value stores
- very fast but low complexity
- like a phone book or dictionary

##### Document databases (aka: noSQL databases)
- no schema, or schema optional
- each record like its own JSON object
- less guaranteed consistency
- custom query languages to access
- EG: MongoDB, CouchDB, RavenDB, also REDIS

##### Relational database (aka: SQL databases)
- highly structured
- like a set of connected spreadsheets
- can be change, but may be difficult
- capable of high or low complexity
- use SQL to access data
- EG: Postgres, MS SQL Server, SQLite

#### Where do they live?
- Embedded
- Served
- Distributed (lives everwhere)

#### Anatomy of relational DB

Database > Table > column/fields > Row/Record (with values)

- You can have more than one table inside a database

#### Interacting with DBs
- Served vs local - the ways the db is connected to different environments (Production, Dev, Test)
- Migrations (The Schema/ Blueprint) and
- Seeds (The actual starting data)
- Structured Query Language
- CRUD operations: Create, Read, Update, Delete

#### Workoing with RDBs at Dev Academy
- How do we see the database in VSCode?
    - SQLite viewer
    - How do we interact (e.g. CRUD with the database?
        - Knex - our JavaScript friendly SQL query

### Testing Databases

+--------------------+        +-------------+
| Users              |        | Bookmarks   |
+--------------------+        +-------------+
| id                 |<---    | id          |
| name               |    \   | link        |
| address            |     ---| user_id     |
+--------------------+        +-------------+
