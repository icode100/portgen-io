/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/image 8extra2.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Cookies from "js-cookie";

function NavBar({ setComponent, name, desc, Education, Skills, Project, Company }) {
  const changeDis = (event) => {
    const targetId = event.target.id;
    let component = null;

    if (targetId === "Home") {
      component = <Home Name={name} desc={desc} />;
    } else if (targetId === "Education") {
      component = <Education Education={Education} Skills={Skills} />;
    } else if (targetId === "Projects") {
      component = <Projects Project={Project} />;
    } else if (targetId === "WorkExp") {
      component = <WorkExp Company={Company} />;
    }
    setComponent(component);
  };

  return (
    <div className="flex flex-col items-center bg-orange-300 p-4">
      <h4 className="text-lg font-bold">Hi guys, This is {name}!!</h4>
      <div className="flex space-x-4 mt-4">
        <div id="Home" onClick={changeDis} className="cursor-pointer underline">
          Home
        </div>
        <div id="Education" onClick={changeDis} className="cursor-pointer underline">
          Edu & Skills
        </div>
        <div id="Projects" onClick={changeDis} className="cursor-pointer underline">
          Projects
        </div>
        <div id="WorkExp" onClick={changeDis} className="cursor-pointer underline">
          Work Experience
        </div>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  setComponent: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  Education: PropTypes.object.isRequired,
  Skills: PropTypes.object.isRequired,
  Project: PropTypes.object.isRequired,
  Company: PropTypes.array.isRequired,
};

function Home({ Name, desc }) {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex items-center p-8 bg-yellow-200 rounded-lg shadow-lg w-[70%]">
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

function Footer({ email, github, LinkedIn, phoneno }) {
  return (
    <div className="flex justify-around items-center bg-orange-300 p-4">
      <div className="text-center">
        <span className="font-bold">Email:</span>
        <p>{email}</p>
      </div>
      <div className="text-center">
        <span className="font-bold">GitHub:</span>
        <p>{github}</p>
      </div>
      <div className="text-center">
        <span className="font-bold">LinkedIn:</span>
        <p>{LinkedIn}</p>
      </div>
      <div className="text-center">
        <span className="font-bold">Phone:</span>
        <p>{phoneno}</p>
      </div>
    </div>
  );
}

Footer.propTypes = {
  email: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  LinkedIn: PropTypes.string.isRequired,
  phoneno: PropTypes.string.isRequired,
};

function Education({ Education, Skills }) {
  const EducationComponents = [];
  for (let i = 1; i <= 3; i++) {
    EducationComponents.push(
      <div key={i} className="flex justify-between p-4 bg-green-200 rounded-lg shadow-lg w-[60%] mb-4">
        <p>
          {Education[`Dep${i}`]} - {Education[`Uni${i}`]}
        </p>
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

function Projects({ Project }) {
  const ProjectComponents = [];
  for (let i = 1; i <= 3; i++) {
    ProjectComponents.push(
      <div key={i} className="p-4 bg-green-200 rounded-lg shadow-lg w-[60%] mb-4">
        <h2 className="text-xl font-bold">{Project[`ProName${i}`]}</h2>
        <p>{Project[`ProDesc${i}`]}</p>
        <div className="flex justify-between mt-4">
          <a href={Project[`ProVideo${i}`]} className="text-blue-500 hover:underline">
            Video-Link
          </a>
          <a href={Project[`ProGitLink${i}`]} className="text-blue-500 hover:underline">
            GitHub-Link
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold border-b-2 border-black mb-4">My Projects</h1>
      <div className="flex flex-col items-center">{ProjectComponents}</div>
    </div>
  );
}

Projects.propTypes = {
  Project: PropTypes.object.isRequired,
};

function WorkExp({ Company }) {
  const CompanyComponents = Company.map((item, index) => (
    <div key={index} className="p-4 bg-green-200 rounded-lg shadow-lg w-[60%] mb-4">
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

export default function Webd2() {
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
    <div className="flex flex-col h-screen bg-beige">
      <NavBar
        setComponent={setActiveComponent}
        name={props.Name}
        desc={props.Intro}
        Education={props.Education}
        Skills={props.Skills}
        Project={props.Projects}
        Company={props.Company}
      />
      <div className="flex-grow">{activeComponent || <Home Name={props.Name} desc={props.Intro} />}</div>
      <Footer email={props.Email} github={props.GitHub} LinkedIn={props.LinkedIn} phoneno={props.PhoneNo} />
    </div>
  );
}