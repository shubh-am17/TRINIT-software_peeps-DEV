import React, { useState, useEffect } from "react";
import "./student.css";
import Navbar from "../components/Navbar";

function StudentDashboard() {
  const [tutors, setTutors] = useState([]); // Array to store fetched tutors
  const [filters, setFilters] = useState({
    language: "",
    experience: "",
    minPrice: "",
    maxPrice: "",
  });
  const [searched, setSearched]=useState(false)
  const dummyTutors = [
    {
      id: 1,
      name: "John Doe",
      language: "English",
      experience: "5-10 years",
      price: 30,
    },
    {
      id: 2,
      name: "Jane Smith",
      language: "English",
      experience: "2-5 years",
      price: 25,
    },
    {
      id: 3,
      name: "Alice Johnson",
      language: "English",
      experience: "10+ years",
      price: 40,
    },
  ];

  const languages = ["Hindi", "English", "Italian", "French", "Japanese"];
  const experience = ["0-2 years", "2-5 years", "5-10 years", "10+ years"];

  // Fetch tutors from backend on component mount (replace with actual API call)
  useEffect(() => {
    const fetchTutors = async () => {
      // const response = await fetch("/api/tutors"); // Replace with your API endpoint
      // const data = await response.json();
      setTutors(dummyTutors);
    };

    fetchTutors();
  }, []);

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handleSearch = () => {
    setSearched(true)
    // Perform search logic here
    // For example, you can filter tutors based on the current filters
    console.log("Perform search with filters:", filters);
  };

  const handleProfile = (tutorId) => {
    // Open tutor profile in a new tab
    const tutorProfileUrl = `/tutor-profile/${tutorId}`; // Replace with your URL
    window.open(tutorProfileUrl, "_blank");
  };

  const filteredTutors = tutors.filter((tutor) => {
    const { language, experience, price } = tutor;
    return (
      (!filters.language || language === filters.language) &&
      (!filters.experience || experience.includes(filters.experience)) &&
      (!filters.minPrice ||
        !filters.maxPrice ||
        (price >= filters.minPrice && price <= filters.maxPrice))
    );
  });

  return (
    <>
      <Navbar />

      <div className="student-dashboard">
        <h1>Welcome, Student!</h1>
        <div className="search-filters">
          <h3>Search Tutors</h3>
          <div className="Form">
            <label htmlFor="language">Language:</label>
            <select
              id="language"
              name="language"
              value={filters.language}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              {languages.map((language) => (
                <option key={language} value={language.toLowerCase()}>
                  {language}
                </option>
              ))}
            </select>

            <label htmlFor="experience">Experience:</label>
            <select
              id="experience"
              name="experience"
              value={filters.experience}
              onChange={handleFilterChange}
            >
              <option value="">Any</option>
              {experience.map((exp) => (
                <option key={exp} value={exp.toLowerCase()}>
                  {exp}
                </option>
              ))}
            </select>

            <label htmlFor="minPrice">Minimum Price:</label>
            <input
              type="number"
              placeholder="in USD"
              id="minPrice"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleFilterChange}
            />
            <label htmlFor="maxPrice">Maximum Price:</label>
            <input
              type="number"
              id="maxPrice"
              placeholder="in USD"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
            />
          </div>
          <button onClick={handleSearch} className="btn">
            Search
          </button>{" "}
          {/* Search button */}
        </div>
        <h2>Available Tutors</h2>
        {searched ? (
  dummyTutors.length > 0 ? (
    <ul className="tutors-list">
      {dummyTutors.map((tutor) => (
        <li key={tutor.id}>
          <h3>{tutor.name}</h3>
          <p>
            Teaches: {tutor.language} | Experience: {tutor.experience} |
            Price: ${tutor.price}/hour
          </p>
          <button className="btn" onClick={() => handleProfile(tutor.id)}>
            View Profile
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p>No tutors found matching your filters. Try adjusting them.</p>
  )
) : (
  <p>Perform a search to see available tutors.</p>
)}

      </div>
    </>
  );
}

export default StudentDashboard;
