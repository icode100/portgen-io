import PropTypes from "prop-types";
import Logo from "../assets/PortGenLogo.png";
import BackGround from "../assets/Vector 17.svg";
import PortfolioCat from "./MainPgPortCatSet.jsx";
import { Link } from "react-router-dom";
import profile from "../assets/image_extra1.png";
import NavIcon from "./NavIcon";

export default function MainPage(props) {
  let data = props.data;
  let totalSets = [];
  for (let i = 0; i < data.length; i++) {
    totalSets.push(
      <PortfolioCat
        key={i}
        title={data[i].title}
        images={data[i].images}
        url={data[i].urls}
        components={data[i].components}
      />
    );
  
  MainPage.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        images: PropTypes.array,
        urls: PropTypes.array,
        components: PropTypes.array,
      })
    ).isRequired,
  };
  }

  return (
    <div className="relative flex flex-col w-full h-full bg-white">
      {/* Background */}
      <div className="absolute top-0 right-0 z-[-1]">
        <img src={BackGround} alt="Background" className="h-[40rem] w-[30rem]" />
      </div>

      {/* Navigation Bar */}
      <div className="flex justify-between items-center p-4 bg-[#FFF8F8] shadow-md">
        <Link to="/">
          <img src={Logo} alt="PortGen.IO Logo" className="h-10" />
        </Link>
        <NavIcon img={profile} />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center bg-no-repeat bg-[url('../assets/Vector 23.svg'),url('../assets/Vector 24.svg'),url('../assets/Vector 25.svg'),url('../assets/Vector 26.svg')] bg-center bg-contain">
        <div className="flex flex-wrap justify-center gap-8 p-8">
          {totalSets}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 border-t-4 border-[#FFF9FF] bg-[#A4EAF9] py-4">
        <p className="text-center text-black font-medium">
          Copyright © 2024 PortgenIo.Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}