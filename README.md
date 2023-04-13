# URL Shortener
![](./blob/url-shortener.png)

## Description
This is a simple project made using ReactJS and SpringBoot to demonstrate the working of an URL shortener. The application takes an URL from the user and then generates a smaller URL by hashing it in the backend. The generated URL can be used to get to the original page.

## Tech Stack
1. Frontend: NextJS
2. Backend: SpringBoot
3. Database: Apache Cassandra

## Getting started
We can run the application in two modes, 
1. Manual deployment
2. Docker compose

In the first approach, we launch each and every service by manually writing the deployment commands. \
In the second step however, we rely on docker-compose to do the heavy lifting while we enjoy the show

### Manual Deployment
For this approach, we need to ensure we have the following dependencies installed,
- **Java 17**
- **Node 14**
- **Docker**
- **Terminal or IDE**

Once done, lets begin with the real fun.
1. First, we want to resolve the dependencies of our backend application. It uses **Apache Cassandra** for storing
data We don't want to spend too much time configuring our systems for such an easy 
task, so we will be using the docker images.
    ```
    docker run --name us-cassandra -p 9042:9042 -e CASSANDRA_PASSWORD=cassandra -d cassandra
    ```
2. Once the above services have successfully started up (which you can check using `docker ps`), we will need to 
create a keyspace in Cassandra to hold our data. For that, execute each line from the script one by one.
    ```
    docker exec -it us-cassandra bash
    cqlsh
    CREATE KEYSPACE IF NOT EXISTS url_shortener WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

    ```
    Once done, you can close the terminal. 
3. Now, we can start our backend application. For that, we need to run:
    ```
    cd us-backend
    ./mvnw clean install 
    ./mvnw spring-boot:run
    ```
    If you are a Windows user, replace `./mvnw` with `.\mvnw` or simply `mvnw`
4. Once everything is done, we are ready to launch the frontend aswell. Again, we need to run the following commands.
    ```
    cd us-frontend
    npm i
    npm run dev
    ```
Now everything is up and running. Check the **Deployed URL** section to check how to access the services.

### Docker Compose
Running the application using docker compose is as easy as running,
```
docker compose up
```
Once you have stopped playing, you can turn off the server and delete the 
allocated resources using 
```
docker compose down
```

### Deployed URL
Here are a list of URLs that you can use to access the services
1. Apache Cassandra -> `http://localhost:9042`
2. Backend -> `http://localhost:8080`
3. Frontend -> `http://localhost:3000`