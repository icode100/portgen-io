const mongoose = require('mongoose')
const User = require('./User.js')

const Info = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Intro : {
        type : String,
        required : true
    },
    Age : {
        type : Number,
        required : true
    },
    Nationality: {
        type : String,
        required : true
    },
    Email : {
        type : String,
        ref : User
    },
    GitHub : {
        type : String,
        required : true
    },
    PhoneNo : {
        type : Number,
        required : true
    },
    Profession : {
        type : String,
        required : true
    },
    Awards : [String],

    Education : {
        Uni1:{
            type : String,
            required : true
        },
        Deg1 : {
            type : String,
            required : true
        },
        Gpa1: {
            type : Number,
            required : true
        },
        Uni2: String,
        Deg2: String,
        Gpa2: Number,
        Uni3: String,
        Deg3: String,
        Gpa3: Number,
    },

    NoOfProjects: {
        type : String,
        required : true
    },

    Projects:{
        ProName1 : {
            type : String,
            required : true
        },
        ProDesc1 : {
            type : String,
            required : true
        },
        ProGitLink1 : {
            type : String,
            required : true
        },
        ProVideo1 : {
            type: String,
            required : true
        },
        ProName2 : String,
        ProDesc2: String,
        ProGitLink2 : String,
        ProVideo2 : String,
        ProName3 : String,
        ProDesc3: String,
        ProGitLink3 : String,
        ProVideo3 : String,
    },
    
    Skills : {
        Skill1 : {
            type : String,
            required : true
        },
        SkillScore1:{
            type : Number,
            required:true
        },
        Skill2 : String,
        SkillScore2 : Number,
        Skill3 : String,
        SkillScore3 : Number,
        Skill4 : String,
        SkillScore4 : Number,
        Skill5 : String,
        SkillScore5 : Number,
    },
    YearsExp : Number,
    Company : {
        Comp1 : String,
        WorkDesk1 : String,
        Comp2 : String,
        WorkDesk2 : String,
        Comp3 : String,
        WorkDesk3 : String,
    }

})

module.exports = mongoose.model('Info', Info)