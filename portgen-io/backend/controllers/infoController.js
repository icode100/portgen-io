const Info = require("../models/Info");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const Portfolio = require("../models/Portfolios")


const make = async (req, res) => {
   // const {Cat, Photo, ReactCode} = req.body
   const port = await Portfolio.create({ Category : "hi",
                                         Photo : "",
                                         ReactCode: "https://drive.google.com/file/d/1DtcXf3cUBSaS9sjlFUFjNIKYGIgtaAm0/view?usp=drive_link"
                                       })
   res.send("did")
}


const submit = async (req, res) =>{
    const {Profile, About, Education, Projects, Skills, Experience} = req.body

    const {Email} =  await User.findOne({_id : req.user.userId}).exec()
    const userInfo = await Info.create({ Name: Profile.Name,
                                         Profession: Profile.Profession,
                                         Age: Profile.Age,
                                         Nationality: Profile.Nationality,
                                         Email: Profile.Email,
                                         GitHub: Profile.GitHub,
                                         LinkedIn: Profile.LinkedIn,
                                         PhoneNo: Profile.PhoneNo,
                                         Email:Email,
                                         UserId:req.user.userId,

                                         Awards: About.Awards,
                                         NoOfProjects: About.NoOfProjects,
                                         Intro : About.Intro,
                                        
                                         Education :{
                                            Uni1 : Education.edu1.Uni1,
                                            Dep1 : Education.edu1.Dep1,
                                            Deg1 : Education.edu1.Deg1,
                                            Gpa1 : Education.edu1.Gpa1,

                                            Uni2 : Education.edu2.Uni2,
                                            Dep2 : Education.edu2.Dep2,
                                            Deg2 : Education.edu2.Deg2,
                                            Gpa2 : Education.edu2.Gpa2,

                                            Uni3 : Education.edu3.Uni3,
                                            Dep3 : Education.edu3.Dep3,
                                            Deg3 : Education.edu3.Deg3,
                                            Gpa3 : Education.edu3.Gpa3
                                         },

                                         Projects :{
                                            ProName1 : Projects.pro1.ProName1,
                                            ProDesc1 : Projects.pro1.ProDesc1,
                                            ProGitLink1 : Projects.pro1.ProGitLink1,
                                            ProVideo1 : Projects.pro1.ProVideo1,

                                            ProName2 : Projects.pro2.ProName2,
                                            ProDesc2 : Projects.pro2.ProDesc2,
                                            ProGitLink2 : Projects.pro2.ProGitLink2,
                                            ProVideo2 : Projects.pro2.ProVideo2,

                                            ProName3 : Projects.pro3.ProName3,
                                            ProDesc3 : Projects.pro3.ProDesc3,
                                            ProGitLink3 : Projects.pro2.ProGitLink3,
                                            ProVideo3 : Projects.pro2.ProVideo3,
                                         },

                                         Skills :{
                                            Skill1 : Skills.sk1,
                                            SkillScore1 : Skills.ss1,

                                            Skill2 : Skills.sk2,
                                            SkillScore2 : Skills.ss2,

                                            Skill3 : Skills.sk3,
                                            SkillScore3 : Skills.ss3,

                                            Skill4 : Skills.sk4,
                                            SkillScore4 : Skills.ss4,

                                            Skill5 : Skills.sk5,
                                            SkillScore5 : Skills.ss5,
                                         },

                                         YearsExp : Experience.YearsExp,
                                         Company : {
                                            Comp1 : Company.c1.Comp1,
                                            WorkDesk1 : Company.c1.WorkDesk1,
                                            Comp2 : Company.c1.Comp2,
                                            WorkDesk2 : Company.c1.WorkDesk2,
                                            Comp3 : Company.c1.Comp3,
                                            WorkDesk3 : Company.c1.WorkDesk3
                                        }

                                        });
    res
        .status(StatusCodes.CREATED)
        .json({ user: { userId: req.user.userId}});
}

module.exports = {
   make
}