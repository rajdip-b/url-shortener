package com.urlshortner.usbackend;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class URLService {

    private final URLRepository urlRepository;

    public URLService(URLRepository urlRepository) {
        this.urlRepository = urlRepository;
    }

    public String generateShortUrl(String longUrl) {
        var randomValue = "";
        var shortUrl = generateHash(longUrl, randomValue);
        while (urlRepository.existsByShortUrl(shortUrl)) {
            randomValue = generatRandomString();
            shortUrl = generateHash(longUrl, randomValue);
        }
        var url = new URL(shortUrl, longUrl, randomValue);
        urlRepository.save(url);
        return shortUrl;
    }

    public String getLongUrl(String shortUrl) throws RuntimeException {
        return urlRepository
                .findByShortUrl(shortUrl)
                .orElseThrow(() -> new RuntimeException("The URL was not found!"))
                .getLongUrl();
    }

    private static String generateHash(String plainText, String randomValue) {
        return DigestUtils.sha256Hex(plainText + randomValue).substring(0, 6);
    }

    private static String generatRandomString() {
        return UUID.randomUUID().toString().substring(0, 6);
    }

}
