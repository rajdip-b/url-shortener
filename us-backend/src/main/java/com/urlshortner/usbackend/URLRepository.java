package com.urlshortner.usbackend;

import com.urlshortner.usbackend.URL;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface URLRepository extends CassandraRepository<URL, String> {

    Optional<URL> findByShortUrl(String shortUrl);
    boolean existsByShortUrl(String shortUrl);

}
