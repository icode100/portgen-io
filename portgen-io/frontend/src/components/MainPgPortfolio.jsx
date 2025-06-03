import PropTypes from "prop-types";

export default function MainPgPortfolio(props) {
  return (
    <div className="h-[15rem] w-[21rem] mr-8 shadow-md rounded-lg">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img
          src={props.img}
          className="h-full w-full object-cover rounded-lg"
          alt="Portfolio"
        />
      </a>
    </div>
  );
}

MainPgPortfolio.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string,
};