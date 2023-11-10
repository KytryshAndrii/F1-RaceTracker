package com.example.f1trackerserver

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.RestTemplate


@RestController
@RequestMapping("/f1/results")
class F1ResultsController{
    @GetMapping("/recent")
    fun getF1ResultsCurrent(): String {
        val restTemplate = RestTemplate()
        val url = "http://ergast.com/api/f1/current/last/results.json"
        return restTemplate.getForObject(url, String::class.java) ?: "No data received"
    }

    @GetMapping("/paramresults")
    fun getF1ResultsByYearAndRound(@RequestParam year: Int, round: Int): String {
        val restTemplate = RestTemplate()
        val url = "http://ergast.com/api/f1/$year/$round/results.json"
        val response: String = restTemplate.getForObject(url, String::class.java) ?: "No data received"
        val result: String = StringEdditor().cutRightPart(response, "\"Races\":")
        println(result.dropLast(2).replaceFirstChar { "{\"Races\":" })
        return result.dropLast(2).replaceFirstChar { "{\"Races\":" }
    }

    @GetMapping("/driverresult")
    fun getF1ResultsByDriverAndYear(@RequestParam year: Int, driver: String): String {
        val restTemplate = RestTemplate()
        val url = "http://ergast.com/api/f1/$year/drivers/$driver/results.json"
        val response: String = restTemplate.getForObject(url, String::class.java) ?: "No data received"
        val result: String = StringEdditor().cutRightPart(response, "\"Races\":")
        return  result.dropLast(2).replaceFirstChar { "{\"Races\":" }
    }
    @GetMapping("/constructorresult")
    fun getF1ResultsByDriverAndConstructor(@RequestParam driver: String, constructor: String): String {
        val restTemplate = RestTemplate()
        val url = "http://ergast.com/api/f1/drivers/$driver/constructors/$constructor/results.json"
        val response: String = restTemplate.getForObject(url, String::class.java) ?: "No data received"
        val result: String = StringEdditor().cutRightPart(response, "\"Races\":")
        return  result.dropLast(2).replaceFirstChar { "{\"Races\":" }
    }

    @GetMapping("/fastestresult")
    fun getF1ResultFastest(@RequestParam year: String): String {
        val restTemplate = RestTemplate()
        val url = "http://ergast.com/api/f1/$year/1/fastest/1/results.json"
        val response: String = restTemplate.getForObject(url, String::class.java) ?: "No data received"
        val result: String = StringEdditor().cutRightPart(response, "\"Races\":")
        return  result.dropLast(2).replaceFirstChar { "{\"Races\":" }
    }

}