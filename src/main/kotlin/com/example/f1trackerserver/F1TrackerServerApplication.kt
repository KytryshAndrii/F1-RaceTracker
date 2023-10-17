package com.example.f1trackerserver

import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.RestTemplate


@SpringBootApplication
class F1TrackerServerApplication

fun main(args: Array<String>) {
    runApplication<F1TrackerServerApplication>(*args)
}

data class MRData(
    val xmlns: String,
    val series: String,
    val url: String,
    val limit: String,
    val offset: String,
    val total: String,
    val RaceTable: RaceTable
)

data class RaceTable(
    val season: String,
    val Races: List<Race>
)

data class Race(
    val season: String,
    val round: String,
    val url: String,
    val raceName: String,
    val Circuit: Circuit,
    val Location: Location,
    val FirstPractice: Practice,
    val SecondPractice: Practice,
    val ThirdPractice: Practice,
    val Qualifying: Practice,
    val Sprint: Practice
)

data class Circuit(
    val circuitId: String,
    val url: String,
    val circuitName: String
)

data class Location(
    val lat: String,
    val long: String,
    val locality: String,
    val country: String,
    val date: String,
    val time: String
)

data class Practice(
    val date: String,
    val time: String
)

@RestController
@RequestMapping("/f1")
class F1ResultsController {
    private val restTemplate = RestTemplate()

    @GetMapping("/results")
    fun getF1Results(): ResponseEntity<MRData> {
        val url = "http://ergast.com/api/f1/current/last/results.json"
        val json = restTemplate.getForObject(url, String::class.java)
        val objectMapper = ObjectMapper()

        try {
            val result: MRData = objectMapper.readValue(json, MRData::class.java)
            println(result)
            return ResponseEntity.ok(result)
        } catch (e: Exception) {
            println(e)
            return ResponseEntity.status(500).body(MRData("", "", "", "", "", "", RaceTable("", emptyList())))
        }
    }
}