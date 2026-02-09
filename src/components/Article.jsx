import PropTypes from "prop-types";

function Article(props) {
  return (
    <>
      <h4>- {props.variant}</h4>
      <div>
        Brand: {props.merk}, Harga: {props.price}, Tags:
        {props.tags ? props.tags.join(",") : ""}
      </div>
    </>
  );
}

Article.propTypes = {
  variant: PropTypes.string,
  merk: PropTypes.string,
  price: PropTypes.number,
  tags: PropTypes.array,
};

export default Article;
