const express = require("express");
const mongose = require("mongoose")

const menSchema = new mongose.Schema({
    ranking:{
        type:Number,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true,
        trim:true
    }
})


// creating a new collection                | table name
const MensRanking = new mongose.model("MensRanking", menSchema)

module.exports = MensRanking;