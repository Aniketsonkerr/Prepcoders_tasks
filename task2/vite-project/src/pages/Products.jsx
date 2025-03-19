import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientLogos from "../components/Clientlogos";

const products = [
  {
    id: 1,
    title: "Running Shoes",
    text: "Lightweight and comfortable running shoes.",
    img: "https://rukminim2.flixcart.com/image/750/900/xif0q/shoe/q/s/n/-original-imah25hq9y8t3ukf.jpeg?q=20&crop=false",
  },
  {
    id: 2,
    title: "Casual Sneakers",
    text: "Perfect for casual outings and streetwear.",
    img: "https://rukminim2.flixcart.com/image/750/900/xif0q/shoe/q/s/n/-original-imah25hq9y8t3ukf.jpeg?q=20&crop=false",
  },
  {
    id: 3,
    title: "Formal Shoes",
    text: "Elegant and stylish formal shoes for work.",
    img: "https://rukminim2.flixcart.com/image/750/900/xif0q/shoe/q/s/n/-original-imah25hq9y8t3ukf.jpeg?q=20&crop=false",
  },
];

function Products() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <>
      <div className="container p-5">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.img} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.text}</Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
      <ClientLogos className="w-full" />
    </>
  );
}

export default Products;
