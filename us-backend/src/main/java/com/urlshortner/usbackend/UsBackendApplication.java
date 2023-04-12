package com.urlshortner.usbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.cassandra.repository.config.EnableCassandraRepositories;

@SpringBootApplication
@EnableCassandraRepositories(basePackages = "com.urlshortner.usbackend")
public class UsBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(UsBackendApplication.class, args);
    }

}
