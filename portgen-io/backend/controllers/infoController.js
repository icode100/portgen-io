const Info = require("../models/Info");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");


const makeInfo = async (req, res) => {
  const { Profile, About, Education, Projects, Skills, Experience,Company } = req.body;

  const { Email } = await User.findOne({ _id: req.user.userId });
  const userInfo = await Info.create({
    Name: Profile.Name,
    Profession: Profile.Profession,
    Age: Profile.Age,
    Nationality: Profile.Nationality,
    Email: req.user.email,
    GitHub: Profile.GitHub,
    LinkedIn: Profile.LinkedIn,
    PhoneNo: Profile.PhoneNo,
    UserId: req.user.userId,

    Awards: About.Awards,
    NoOfProjects: About.NoOfProjects,
    Intro: About.Intro,

    Education: {
      Uni1: Education.edu1.Uni1,
      Dep1: Education.edu1.Dep1,
      Deg1: Education.edu1.Deg1,
      Gpa1: Education.edu1.Gpa1,

      Uni2: Education.edu2.Uni2,
      Dep2: Education.edu2.Dep2,
      Deg2: Education.edu2.Deg2,
      Gpa2: Education.edu2.Gpa2,

      Uni3: Education.edu3.Uni3,
      Dep3: Education.edu3.Dep3,
      Deg3: Education.edu3.Deg3,
      Gpa3: Education.edu3.Gpa3,
    },

    Projects: {
      ProName1: Projects.pro1.ProName1,
      ProDesc1: Projects.pro1.ProDesc1,
      ProGitLink1: Projects.pro1.ProGitLink1,
      ProVideo1: Projects.pro1.ProVideo1,

      ProName2: Projects.pro2.ProName2,
      ProDesc2: Projects.pro2.ProDesc2,
      ProGitLink2: Projects.pro2.ProGitLink2,
      ProVideo2: Projects.pro2.ProVideo2,

      ProName3: Projects.pro3.ProName3,
      ProDesc3: Projects.pro3.ProDesc3,
      ProGitLink3: Projects.pro2.ProGitLink3,
      ProVideo3: Projects.pro2.ProVideo3,
    },

    Skills: {
      Skill1: Skills.s1.sk1,
      SkillScore1: Skills.s1.ss1,

      Skill2: Skills.s2.sk2,
      SkillScore2: Skills.s2.ss2,

      Skill3: Skills.s3.sk3,
      SkillScore3: Skills.s3.ss3,

      Skill4: Skills.s4.sk4,
      SkillScore4: Skills.s4.ss4,

      Skill5: Skills.s5.sk5,
      SkillScore5: Skills.s5.ss5,
    },

    YearsExp: Experience.YearsExp,
    Company: {
      Comp1: Company.c1.Comp1,
      WorkDesk1: Company.c1.WorkDesk1,
      Comp2: Company.c2.Comp2,
      WorkDesk2: Company.c2.WorkDesk2,
      Comp3: Company.c3.Comp3,
      WorkDesk3: Company.c3.WorkDesk3,
    },
  });
  res.status(StatusCodes.CREATED).json({ user: { userId: req.user.userId } });
};


const getInfo = async (req,res)=>{
  const info = await Info.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({info: info});
}
module.exports = {
  makeInfo,
  getInfo
};
