import { useState } from "react";
import Countries from "./CountrySelect";

const countries = Countries();

export default function InfoComponent() {
  const [InfoState, setInfoState] = useState({
    Name: "",
    Intro: "",
    Age: 0,
    Nationality: "",
    Email: "",
    Github: "",
    Phone: "",
    Profession: "",
    Awards: "",
    NumProjects: "",
    Uni1: "",
    Deg1: "",
    Dept1: "",
    GPA1: "",
    Uni2: "",
    Deg2: "",
    Dept2: "",
    GPA2: "",
    Uni3: "",
    Deg3: "",
    Dept3: "",
    GPA3: "",
    PrNm1: "",
    PrGit1: "",
    PrVid1: "",
    PrDesc1: "",
    PrNm2: "",
    PrGit2: "",
    PrVid2: "",
    PrDesc2: "",
    PrNm3: "",
    PrGit3: "",
    PrVid3: "",
    PrDesc3: "",
    Skill1: "",
    SkillScore1: "",
    Skill2: "",
    SkillScore2: "",
    Skill3: "",
    SkillScore3: "",
    Skill4: "",
    SkillScore4: "",
    Skill5: "",
    SkillScore5: "",
    YearsExp: "",
    Comp1: "",
    WorkDesc1: "",
    Comp2: "",
    WorkDesc2: "",
    Comp3: "",
    WorkDesc3: "",
  });

  function HandleChange(event) {
    setInfoState({
      ...InfoState,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted:", InfoState);
    // Add your API call logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="Name"
              placeholder="Enter Your Name"
              className="p-2 border rounded-md"
              onChange={HandleChange}
            />
            <input
              type="text"
              name="Profession"
              placeholder="Enter Your Profession"
              className="p-2 border rounded-md"
              onChange={HandleChange}
            />
            <input
              type="number"
              name="Age"
              placeholder="Enter Your Age"
              className="p-2 border rounded-md"
              onChange={HandleChange}
            />
            <select
              name="Nationality"
              className="p-2 border rounded-md"
              onChange={HandleChange}
            >
              <option value="">Select Nationality</option>
              {countries.map((country) => (
                <option key={country.code} value={country.label}>
                  {country.label}
                </option>
              ))}
            </select>
            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              className="p-2 border rounded-md"
              onChange={HandleChange}
            />
            <input
              type="text"
              name="Github"
              placeholder="Enter Your GitHub URL"
              className="p-2 border rounded-md"
              onChange={HandleChange}
            />
            <input
              type="text"
              name="Phone"
              placeholder="Enter Your Phone Number"
              className="p-2 border rounded-md"
              onChange={HandleChange}
            />
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="number"
              name="Awards"
              placeholder="Enter Number of Awards"
              className="p-2 border rounded-md"
              onChange={HandleChange}
            />
            <input
              type="number"
              name="NumProjects"
              placeholder="Enter Number of Projects"
              className="p-2 border rounded-md"
              onChange={HandleChange}
            />
            <textarea
              name="Intro"
              placeholder="Write Something About Yourself"
              className="p-2 border rounded-md"
              rows="4"
              onChange={HandleChange}
            ></textarea>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Education</h2>
          {[1, 2, 3].map((index) => (
            <div key={index} className="mb-4">
              <h3 className="text-md font-medium mb-2">Education {index}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name={`Uni${index}`}
                  placeholder="University Name"
                  className="p-2 border rounded-md"
                  onChange={HandleChange}
                />
                <input
                  type="text"
                  name={`Deg${index}`}
                  placeholder="Degree"
                  className="p-2 border rounded-md"
                  onChange={HandleChange}
                />
                <input
                  type="text"
                  name={`Dept${index}`}
                  placeholder="Department"
                  className="p-2 border rounded-md"
                  onChange={HandleChange}
                />
                <input
                  type="text"
                  name={`GPA${index}`}
                  placeholder="GPA"
                  className="p-2 border rounded-md"
                  onChange={HandleChange}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Projects</h2>
          {[1, 2, 3].map((index) => (
            <div key={index} className="mb-4">
              <h3 className="text-md font-medium mb-2">Project {index}</h3>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name={`PrNm${index}`}
                  placeholder="Project Name"
                  className="p-2 border rounded-md"
                  onChange={HandleChange}
                />
                <input
                  type="text"
                  name={`PrGit${index}`}
                  placeholder="GitHub URL"
                  className="p-2 border rounded-md"
                  onChange={HandleChange}
                />
                <input
                  type="text"
                  name={`PrVid${index}`}
                  placeholder="Video Link"
                  className="p-2 border rounded-md"
                  onChange={HandleChange}
                />
                <textarea
                  name={`PrDesc${index}`}
                  placeholder="Project Description"
                  className="p-2 border rounded-md"
                  rows="3"
                  onChange={HandleChange}
                ></textarea>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Skills</h2>
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                name={`Skill${index}`}
                placeholder={`Skill ${index}`}
                className="p-2 border rounded-md mb-2"
                onChange={HandleChange}
              />
              <input
                type="range"
                name={`SkillScore${index}`}
                min="0"
                max="100"
                step="10"
                className="w-full"
                onChange={HandleChange}
              />
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Experience</h2>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="number"
              name="YearsExp"
              placeholder="Years of Experience"
              className="p-2 border rounded-md"
              onChange={HandleChange}
            />
            {[1, 2, 3].map((index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  name={`Comp${index}`}
                  placeholder={`Company ${index}`}
                  className="p-2 border rounded-md"
                  onChange={HandleChange}
                />
                <textarea
                  name={`WorkDesc${index}`}
                  placeholder="Work Description"
                  className="p-2 border rounded-md"
                  rows="3"
                  onChange={HandleChange}
                ></textarea>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}