package com.urlshortner.usbackend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table
public class URL {

    @Id
    @PrimaryKey
    private String shortUrl;
    private String longUrl;
    private String randomValue;

}
