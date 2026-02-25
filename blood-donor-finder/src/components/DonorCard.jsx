function DonorCard({ donor, requested, handleRequest }) {
  return (
    <div className="card">
      <h3>{donor.name}</h3>
      <p><b>Blood Group:</b> {donor.bloodGroup}</p>
      <p><b>City:</b> {donor.city}</p>
      <p>
        <b>Status:</b>{" "}
        {donor.available ? "Available ✅" : "Not Available ❌"}
      </p>

      <button
        disabled={requested}
        onClick={() => handleRequest(donor.id)}
      >
        {requested ? "Request Sent ✅" : "Request Help"}
      </button>
    </div>
  );
}

export default DonorCard;