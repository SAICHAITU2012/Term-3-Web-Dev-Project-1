import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import DonorCard from "./components/DonorCard";
import FilterBar from "./components/FilterBar";
import Loader from "./components/Loader";

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

function App() {
  const [donors, setDonors] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [loading, setLoading] = useState(true);
  const [searchCity, setSearchCity] = useState("");
  const [requested, setRequested] = useState({});
  const [sortAvailable, setSortAvailable] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        const mapped = data.map(user => ({
          id: user.id,
          name: user.name,
          city: user.address.city,
          bloodGroup: bloodGroups[Math.floor(Math.random() * bloodGroups.length)],
          available: Math.random() > 0.5
        }));
        setDonors(mapped);
        setLoading(false);
      });
  }, []);

  const handleRequest = (id) => {
    setRequested(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const filteredDonors = donors
    .filter(d =>
      selectedGroup === "All" ? true : d.bloodGroup === selectedGroup
    )
    .filter(d =>
      d.city.toLowerCase().includes(searchCity.toLowerCase())
    )
    .sort((a, b) =>
      sortAvailable ? b.available - a.available : 0
    );

  const availableCount = filteredDonors.filter(d => d.available).length;

  return (
    <div>
      <Navbar count={availableCount} />
      
      <FilterBar
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        sortAvailable={sortAvailable}
        setSortAvailable={setSortAvailable}
      />

      {loading && <Loader />}

      {!loading && filteredDonors.length === 0 && (
        <h2 style={{ textAlign: "center" }}>No donors found 😢</h2>
      )}

      <div className="grid">
        {!loading &&
          filteredDonors.map(donor => (
            <DonorCard
              key={donor.id}
              donor={donor}
              requested={requested[donor.id]}
              handleRequest={handleRequest}
            />
          ))}
      </div>
    </div>
  );
}

export default App;