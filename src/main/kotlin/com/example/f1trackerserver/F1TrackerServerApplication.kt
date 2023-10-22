package com.example.f1trackerserver

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class F1TrackerServerApplication

fun main(args: Array<String>) {
    runApplication<F1TrackerServerApplication>(*args)
}
