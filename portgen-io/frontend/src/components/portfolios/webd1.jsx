import React from 'react';
import Logo from "../../assets/image 8extra2.png";
import './webd1Style.css'; 
import Project from './projectwebd1.jsx';
import Skill from './skillsLoader.jsx';
import Company from './company.jsx';
import Education from './education.jsx';
import Back from '../../assets/Rectangle 5inside.svg';
export default function webd1(props) {
  return (
    <div>
        <div className='webd1_navbar'>
            <div> hi this is nav bar</div>
            <img src={Logo} alt="no image" />
        </div>
        <p className='desc'>Hey, this is {props.name} in my journey of crafting the unseen power behind every click!!</p>
       <div className='total-info'>
            <img src={Back} alt="" />
            <p class="about">About Me</p>
            <div className="info">
                <div className="in-info">
                    <div className="eduction">
                        <Education class="Nursery" clg="Amma lap" gpa={10}/>
                        <Education class="Nursery" clg="Amma lap" gpa={10}/>
                        <Education class="Nursery" clg="Amma lap" gpa={10}/>
                    </div>
                </div>
                <div className='personal in-info'>
                    <div>
                        <p>Phone No:</p>
                        <p>+91 - 9553777142</p>
                    </div>
                    <div>
                        <p>GitHub link</p>
                        <p>link bro yaha</p>
                    </div>
                    <div>
                        <p>Twitter</p>
                        <p>link bro yaha</p>
                    </div>
                    <div>
                        <p>Nationality</p>
                        <p>Indian</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="projectsDesc">
            <div className="proDescHead">
                <p>Projects</p>
            </div>
            <div className="proTot">
                <Project title="Chocolate Maker" desc="This is world famous chocolate maker u can find"/>
                <Project title="Chocolate Maker" desc="This is world famous chocolate maker u can find"/>
                <Project title="Chocolate Maker" desc="This is world famous chocolate maker u can find"/>
            </div>
        </div>

        <div className="skillsSet">
            <div className="skillsSetHead">
                <h2>Skills</h2>
            </div>
            <div className="skillsTot">
                <Skill title = {"Eating"} value = {10}/>
                <Skill title = {"Eating"} value = {10}/>
                <Skill title = {"Eating"} value = {10}/>
                <Skill title = {"Eating"} value = {10}/>
                <Skill title = {"Eating"} value = {10}/>                
            </div>
        </div>

        <div className="company-">
            <div className="companyHead">
                <h2>Previous Experiences</h2>
            </div>
            <div className="companyTot">
                <Company title = {"Amul"} desc = {"The best place i have worked..learnt how to eat more"}/>
                <Company title = {"Amul"} desc = {"The best place i have worked..learnt how to eat more"}/>  
                <Company title = {"Amul"} desc = {"The best place i have worked..learnt how to eat more"}/>  
            </div>
        </div>
    </div>
  )
}
