package com.okta.kotlin.f1server

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.RestTemplate



@SpringBootApplication
class F1ServerApplication

fun main(args: Array<String>) {
    runApplication<F1ServerApplication>(*args)
}


@RestController
@RequestMapping("/f1/reccent")
class F1ResultsController {
    @GetMapping("/results")
    fun getF1Results(): ResponseEntity<String> {
        val restTemplate = RestTemplate()
        val url = "http://ergast.com/api/f1/current/last/results.json"
        val response = restTemplate.getForObject(url, String::class.java)
        return ResponseEntity.ok(response)
}
}