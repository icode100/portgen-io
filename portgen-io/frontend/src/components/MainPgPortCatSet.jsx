import PropTypes from "prop-types";
import Portfolio from "./MainPgPortfolio.jsx";

export default function MainPgPortCatSet(props) {
  let components = [];
  let images = props.images;
  let urls = props.url;

  for (let i = 0; i < props.images.length; i++) {
    components.push(
      <Portfolio
        key={i}
        img={images[i]}
        url={urls[i]}
        component={props.components[i]}
      />)
  }
  
  MainPgPortCatSet.propTypes = {
    images: PropTypes.array.isRequired,
    url: PropTypes.array.isRequired,
    components: PropTypes.array.isRequired,
    title: PropTypes.string
  };
  

  return (
    <div className="flex flex-col px-12 pt-12">
      <p className="text-lg font-semibold mb-4">{props.title}</p>
      <div className="flex flex-wrap gap-8">{components}</div>
    </div>
  );
}