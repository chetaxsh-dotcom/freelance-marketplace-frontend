import freelancers from "../data/freelancers";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {freelancers.map((freelancer) => (
        <div
          key={freelancer.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={freelancer.image}
            alt={freelancer.name}
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />

          <h2>{freelancer.name}</h2>
          <p>{freelancer.skill}</p>
          <p><strong>₹ {freelancer.price}</strong></p>
          <p>⭐ {freelancer.rating}</p>

          <Link to={`/profile/${freelancer.id}`}>
            View Profile
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
