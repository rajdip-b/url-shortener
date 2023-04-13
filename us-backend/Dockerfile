FROM openjdk:18-jdk-alpine
RUN apk --no-cache add curl

ENV CASSANDRA_CONTACT_POINTS=${CASSANDRA_CONTACT_POINTS}

WORKDIR /app
COPY pom.xml .
COPY .mvn ./.mvn
COPY mvnw mvnw
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline -B
COPY src ./src
RUN ./mvnw clean package -DskipTests
EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "target/us-backend.jar" ]