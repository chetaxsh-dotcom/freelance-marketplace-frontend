import { useParams } from "react-router-dom";
import freelancers from "../data/freelancers";

const Profile = () => {
  const { id } = useParams();
  const freelancer = freelancers.find(f => f.id === Number(id));

  if (!freelancer) return <h2>Profile not found</h2>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <img
        src={freelancer.image}
        alt={freelancer.name}
        style={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <h2>{freelancer.name}</h2>
      <p>{freelancer.skill}</p>
      <p><strong>₹ {freelancer.price}</strong></p>
      <p>⭐ {freelancer.rating}</p>
    </div>
  );
};

export default Profile;
