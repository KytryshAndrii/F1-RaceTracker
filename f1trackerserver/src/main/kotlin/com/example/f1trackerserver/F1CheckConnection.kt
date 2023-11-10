package com.example.f1trackerserver

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.RestTemplate

@RestController
@RequestMapping("/f1/connection")
class F1CheckConnection {
    @GetMapping("/connect")
    fun getF1Drivers(): Boolean {
        var isconnected:Boolean  = true
        println(isconnected)
        return isconnected
    }
}