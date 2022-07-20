package com.example.fission;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
//@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class FissionApplication {

    public static void main(String[] args) {

        Train.train();

        SpringApplication.run(FissionApplication.class, args);
    }

}
