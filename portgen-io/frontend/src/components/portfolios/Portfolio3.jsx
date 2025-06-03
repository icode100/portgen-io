/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/image 8extra2.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Cookies from "js-cookie";

function NavBar({ setComponent, name, desc, email, github, LinkedIn, phoneno, Education, Skills, Projects, Company }) {
  const changeDis = (event) => {
    const targetId = event.target.id;
    let component = null;

    if (targetId === "Home") {
      component = <Home Name={name} desc={desc} />;
    } else if (targetId === "Education") {
      component = <Education Education={Education} Skills={Skills} />;
    } else if (targetId === "Projects") {
      component = <Projects Projects={Projects} />;
    } else if (targetId === "WorkExp") {
      component = <WorkExp Company={Company} />;
    }
    setComponent(component);
  };

  return (
    <div className="flex flex-col">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Hi guys</h1>
        <h3 className="text-lg">Welcome to my portfolio</h3>
      </div>
      <div className="flex justify-around mt-4">
        <h6 id="Home" onClick={changeDis} className="cursor-pointer text-blue-500 hover:underline">
          Home
        </h6>
        <h6 id="Education" onClick={changeDis} className="cursor-pointer text-blue-500 hover:underline">
          Edu & Skills
        </h6>
        <h6 id="WorkExp" onClick={changeDis} className="cursor-pointer text-blue-500 hover:underline">
          Prev Experiences
        </h6>
        <h6 id="Projects" onClick={changeDis} className="cursor-pointer text-blue-500 hover:underline">
          Projects
        </h6>
      </div>
      <div className="mt-6">
        <div className="text-center">
          <span className="font-bold">Email:</span> {email}
        </div>
        <div className="text-center">
          <span className="font-bold">GitHub:</span> {github}
        </div>
        <div className="text-center">
          <span className="font-bold">LinkedIn:</span> {LinkedIn}
        </div>
        <div className="text-center">
          <span className="font-bold">Phone:</span> {phoneno}
        </div>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  setComponent: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  Name: PropTypes.string, // Added validation for 'Name'
  desc: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  LinkedIn: PropTypes.string.isRequired,
  phoneno: PropTypes.string.isRequired,
  Education: PropTypes.object.isRequired,
  Skills: PropTypes.object.isRequired,
  Projects: PropTypes.object.isRequired,
  Company: PropTypes.array.isRequired,
};

function Home({ Name, desc }) {
  return (
    <div className="flex justify-center items-center h-[80%]">
      <div className="flex items-center p-8 bg-green-200 rounded-lg shadow-lg w-[70%] h-[60vh]">
        <div className="mr-8">
          <h1 className="text-2xl font-bold border-b-2 border-black">{Name}</h1>
          <p>{desc}</p>
        </div>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  Name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

function Project({ title, desc, videoLink, github }) {
  return (
    <div className="p-4 bg-green-200 rounded-lg shadow-lg w-[60%]">
      <div className="mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{desc}</p>
      </div>
      <div className="flex justify-between">
        <a href={videoLink} className="text-blue-500 hover:underline">
          Video-Link
        </a>
        <a href={github} className="text-blue-500 hover:underline">
          GitHub-Link
        </a>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

function Projects({ Projects }) {
  const ProjectH = [];
  for (let i = 1; i <= 3; i++) {
    ProjectH.push(
      <Project
        key={i}
        title={Projects[`ProName${i}`]}
        desc={Projects[`ProDesc${i}`]}
        videoLink={Projects[`ProVideo${i}`]}
        github={Projects[`ProGitLink${i}`]}
      />
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold border-b-2 border-black mb-4">My Projects</h1>
      <div className="flex flex-col items-center">{ProjectH}</div>
    </div>
  );
}

Projects.propTypes = {
  Projects: PropTypes.object.isRequired,
};

function WorkExp({ Company }) {
  const CompanyComponents = Company.map((item, index) => (
    <div key={index} className="p-4 bg-green-200 rounded-lg shadow-lg w-[60%]">
      <h3 className="text-lg font-bold">{item[0]}</h3>
      <p>{item[1]}</p>
    </div>
  ));

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold border-b-2 border-black mb-4">My Work Experiences</h1>
      <div className="flex flex-col items-center">{CompanyComponents}</div>
    </div>
  );
}

WorkExp.propTypes = {
  Company: PropTypes.arrayOf(PropTypes.array).isRequired,
};

function Education({ Education, Skills }) {
  const EducationComponents = [];
  for (let i = 1; i <= 3; i++) {
    EducationComponents.push(
      <div key={i} className="flex justify-between p-4 bg-green-200 rounded-lg shadow-lg w-[60%] mb-4">
        <p>{Education[`Dep${i}`]} - {Education[`Uni${i}`]}</p>
        <p>{Education[`Gpa${i}`]}</p>
      </div>
    );
  }

  const SkillComponents = [];
  for (let i = 1; i <= 3; i++) {
    SkillComponents.push(
      <div key={i} className="flex flex-col items-center">
        <p>{Skills[`Skill${i}`]}</p>
        <div className="w-16 h-16">
          <CircularProgressbar value={Skills[`SkillScore${i}`]} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold border-b-2 border-black mb-4">My Education</h1>
      <div className="flex flex-col items-center">{EducationComponents}</div>
      <h1 className="text-2xl font-bold border-b-2 border-black mt-8 mb-4">My Skills</h1>
      <div className="flex justify-around w-full">{SkillComponents}</div>
    </div>
  );
}

Education.propTypes = {
  Education: PropTypes.object.isRequired,
  Skills: PropTypes.object.isRequired,
};

export default function Webd3() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [props, setProps] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("token");
        if (!token) throw new Error("Invalid token");

        const response = await fetch("http://localhost:5000/portapi/v1/info/getinfo", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) throw new Error(`Error fetching data: ${response.statusText}`);

        const data = await response.json();
        setProps(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-green-200 p-4">
        <NavBar
          setComponent={setActiveComponent}
          name={props.Name}
          desc={props.Intro}
          email={props.Email}
          github={props.GitHub}
          LinkedIn={props.LinkedIn}
          phoneno={props.PhoneNo}
          Education={props.Education}
          Skills={props.Skills}
          Projects={props.Projects}
          Company={props.Company}
        />
      </div>
      <div className="w-3/4 p-4">{activeComponent || <Home Name={props.Name} desc={props.Intro} />}</div>
    </div>
  );
}