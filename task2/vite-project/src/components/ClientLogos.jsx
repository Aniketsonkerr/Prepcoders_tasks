import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const clients = [
  {
    id: 1,
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Under-Armour-Logo.jpg",
  },
  {
    id: 2,
    logo: "https://media.designrush.com/inspirations/540513/conversions/nike-logo-design-preview.jpg",
  },
  {
    id: 3,
    logo: "https://inkbotdesign.com/wp-content/uploads/2024/08/puma-logo-design-1024x683.webp",
  },
  {
    id: 4,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuy6G9_EMaWT2IjqUHJSENS9vfAiDqBs30-w&s",
  },
  {
    id: 5,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3qKBqQ-vwLlMUrQiYT6rNJvT6OjDYhmWBg&s",
  },
  {
    id: 6,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9b1WnZEygU9j5efINMndNWbglYdpNFgnpw&s",
  },
];

function ClientLogos() {
  return (
    <div className="p-5 bg-black bg-opacity-50 ">
      <h2 className="text-center mb-4 text-2xl font-semibold  text-white">
        Our Clients
      </h2>
      <Row className="justify-content-center">
        {clients.map((client) => (
          <Col
            key={client.id}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            className="mb-4 d-flex justify-content-center"
          >
            <img
              src={client.logo}
              alt={`Client ${client.id}`}
              className="img-fluid client-logo"
            />
          </Col>
        ))}
      </Row>

      {/* CSS Styling */}
      <style>{`
        .client-logo {
          transition: transform 0.3s ease-in-out;
          max-width: 100px;
        }
        .client-logo:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}

export default ClientLogos;
