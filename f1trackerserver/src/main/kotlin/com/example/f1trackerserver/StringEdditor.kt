package com.example.f1trackerserver

class StringEdditor(){

    fun countMatches(string: String, pattern: String): Int {
        return string.split(pattern)
            .dropLastWhile { it.isEmpty() }
            .toTypedArray().size - 1
    }

    fun cutRightPart(string: String, pattern: String): String{
        return "{" + string.split(pattern)[1]
    }
}