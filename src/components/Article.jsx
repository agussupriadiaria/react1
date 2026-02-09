import PropTypes from "prop-types";

function Article(props) {
  return (
    <>
      <h4>{props.title}</h4>
      <small>
        Tags: {props.tags ? props.tags.join(",") : ""}, Price: {props.price}
      </small>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Article;
