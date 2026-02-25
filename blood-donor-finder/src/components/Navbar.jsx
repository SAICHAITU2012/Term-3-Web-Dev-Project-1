function Navbar({ count }) {
  return (
    <div className="navbar">
      <h1>🩸 Community Blood Donor Finder</h1>
      <h3>Available Donors: {count}</h3>
    </div>
  );
}

export default Navbar;