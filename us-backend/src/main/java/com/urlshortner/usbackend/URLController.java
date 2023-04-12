package com.urlshortner.usbackend;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
public class URLController {

    private final URLService urlService;

    public URLController(URLService urlService) {
        this.urlService = urlService;
    }

    @GetMapping("/generate-short-url")
    public ResponseEntity<?> generateShortUrl(@RequestParam String longUrl) {
        try {
            return ResponseEntity.ok(urlService.generateShortUrl(longUrl));
        } catch (Exception e) {
            log.error("Error while generating short url", e);
            return ResponseEntity.internalServerError().body("Error while generating short url");
        }
    }

    @GetMapping("/{shortUrl}")
    public ResponseEntity<?> getLongUrl(@PathVariable String shortUrl) {
        try {
            var headers = new HttpHeaders();
            headers.add("Location", urlService.getLongUrl(shortUrl));
            return new ResponseEntity<>(headers, HttpStatus.PERMANENT_REDIRECT);
        } catch (Exception e) {
            log.error("Error while getting long url", e);
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
