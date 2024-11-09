export const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Next.js",
        excerpt: "Learn the basics of Next.js and how to build modern web applications.",
        date: "2024-01-15",
        content: "Next.js is a powerful React framework that makes building web applications simple and efficient..."
    },
    {
        id: 2,
        title: "Understanding React Hooks",
        excerpt: "Deep dive into React Hooks and their practical applications.",
        date: "2024-01-20",
        content: `# Transaction

It can have multiple queries 

It is an event like updating a scorecard 

![Screenshot 2022-10-11 at 01.22.11.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/822b130c-c54a-40cd-b7d0-9c05454f25a5/Screenshot_2022-10-11_at_01.22.11.png)

# Atomicity

All queries in a transaction must succeed

whenever a query in a transaction fails then all the queries in that transaction should be rolled back 

# Isolation

**Read phenomenons** -  

**Dirty reads** - A dirty read occurs when a transaction reads data that has not yet been committed

**Lost updates** - talks about what happens when two update queries run at the same time we can lose updates 

**Non Repeatable reads** - Non-repeatable Reads A non-repeatable read occurs when a transaction reads the same row twice but gets different data each time

**Phantom reads** - A phantom read occurs when, in the course of a transaction, two identical queries are executed, and the collection of rows returned by the second query is different from the first.

### Isolation levels

**Read uncommitted** - No Isolation any change from the outside is visible to the transaction committed or not 

**Read Committed** - Each query in a transaction sees only the committed transaction 

**Repeatable Read** - The transaction will make sure that when a query reads a row,
that row will remain unchanged in the transaction while it's running.

**Snapshot** - Each query in a transaction only sees changes that have been
committed up to the start of the transaction. It's like a snapshot version of the
database at that moment.

**Serializable** - Transactions are run as if they are serialized one after the other.

Each DBMS implements Isolation levels differently

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4f9e51b6-8dd9-4c41-b5f1-30d0cf44290d/Untitled.png)

In database systems, isolation determines how transaction integrity is visible to other users and systems.

# Consistency`
    }
];

