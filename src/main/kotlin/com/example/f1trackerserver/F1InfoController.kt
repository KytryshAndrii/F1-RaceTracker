package com.example.f1trackerserver

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.RestTemplate
import java.time.LocalDateTime
import java.util.*

@RestController
@RequestMapping("/f1/info")
class F1InfoController {
    @GetMapping("/drivers")
    fun getF1Drivers():String{
        val restTemplate = RestTemplate()
        val url = "https://ergast.com/api/f1/drivers.json?limit=859"
        return restTemplate.getForObject(url, String::class.java) ?: "No data received"
    }


    @GetMapping("/rounds")
    fun getF1RoundsByYear(@RequestParam year: String): Int?{
        val restTemplate = RestTemplate()
        val url: String = "https://ergast.com/api/f1/$year.json"
        val result: String = restTemplate.getForObject(url, String::class.java) ?: "No data received"
        val count: Int = StringEdditor().countMatches(result, "\"round\"")
        return count
    }

    @GetMapping("/constructors")
    fun getF1ConstruktorsByDriver(@RequestParam driver: String): String?{
        val restTemplate = RestTemplate()
        val url: String = "https://ergast.com/api/f1/drivers/$driver/constructors.json"
        val response: String = restTemplate.getForObject(url, String::class.java) ?: "No data received"
        val result: String = StringEdditor().cutRightPart(response, "\"driverId\":\"$driver\",")
        return result.dropLast(2)
    }

    @GetMapping("/bydateconstructors")
    fun getF1ConstruktorsByDate(@RequestParam year: String): String?{
        val restTemplate = RestTemplate()
        val url: String = "http://ergast.com/api/f1/$year/constructors.json"
        val response: String = restTemplate.getForObject(url, String::class.java) ?: "No data received"
        val result: String = StringEdditor().cutRightPart(response, "\"Constructors\":")
        return  result.dropLast(2).replaceFirstChar { "{\"Constructors\":" }
    }

    @GetMapping("/yearlist")
    fun getF1ConstruktorsByDate():Array<Int>?{
        val calendar = Calendar.getInstance()
        val current= calendar.get(Calendar.YEAR)
        val arr: Array<Int> = Array<Int>((current + 1) - 2004){it + 2004}
        println(arr.joinToString())
        return  arr
    }

}