package com.example.f1trackerserver

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.RestTemplate


@SpringBootApplication
class F1TrackerServerApplication

fun main(args: Array<String>) {
    runApplication<F1TrackerServerApplication>(*args)
}
@RestController
@RequestMapping("/f1")
class F1ResultsController {
    @GetMapping("/results")
    fun getF1Results(): String {
        val restTemplate = RestTemplate()
        val url = "http://ergast.com/api/f1/current/last/results.json"
        return restTemplate.getForObject(url, String::class.java) ?: "No data received"
    }

    @GetMapping("/drivers")
        fun getF1Drivers():String{
        val restTemplate = RestTemplate()
        val url = "https://ergast.com/api/f1/2008/drivers.json"
        return restTemplate.getForObject(url, String::class.java) ?: "No data received"
        }


    @GetMapping("/rounds")
    fun getF1RoundsByYear(@RequestParam year: String): String?{
        val restTemplate = RestTemplate()
        val url = "https://ergast.com/api/f1/$year.json"
        val result = restTemplate.getForObject(url, String::class.java) ?: "No data received"
        val regex = Regex("round (.*?)[.]")
        val matches = regex.findAll(result)
        val names = matches.map { it.groupValues[1] }.joinToString()
        println(names)
        return result
    }

}
