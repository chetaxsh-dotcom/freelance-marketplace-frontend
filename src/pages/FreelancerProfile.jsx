import { useParams } from "react-router-dom";
import freelancers from "../data/freelancers";

const FreelancerProfile = () => {
  const { id } = useParams();

  const freelancer = freelancers.find(
    (item) => item.id === Number(id)
  );

  if (!freelancer) {
    return <h2>Freelancer not found</h2>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        {freelancer.name}
      </h2>

      <img
        src={freelancer.image}
        alt={freelancer.name}
        style={{ width: "150px", borderRadius: "50%" }}
      />

      <p className="mt-4">
        <strong>Skill:</strong> {freelancer.skill}
      </p>

      <p>
        <strong>Rate:</strong> ₹{freelancer.rate} / hour
      </p>

      <p>
        <strong>Rating:</strong> ⭐ {freelancer.rating}
      </p>
    </div>
  );
};

export default FreelancerProfile;
