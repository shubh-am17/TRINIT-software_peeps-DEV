import React, { useState, useEffect } from 'react';
import './student.css'
function StudentDashboard() {
  const [tutors, setTutors] = useState([]); // Array to store fetched tutors
  const [filters, setFilters] = useState({
    language: '',
    experience: '',
    minPrice: '',
    maxPrice: '',
  });

  // Fetch tutors from backend on component mount (replace with actual API call)
  useEffect(() => {
    const fetchTutors = async () => {
      const response = await fetch('/api/tutors'); // Replace with your API endpoint
      const data = await response.json();
      setTutors(data);
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
    // Perform search logic here
    // For example, you can filter tutors based on the current filters
    console.log("Perform search with filters:", filters);
  };

  const filteredTutors = tutors.filter((tutor) => {
    const { language, experience, price } = tutor;
    return (
      (!filters.language || language === filters.language) &&
      (!filters.experience || experience.includes(filters.experience)) &&
      (
        !filters.minPrice ||
        !filters.maxPrice ||
        (price >= filters.minPrice && price <= filters.maxPrice)
      )
    );
  });

  return (
    <div className="student-dashboard">
      <h1>Welcome, Student!</h1>
      <div className="search-filters">
        <h3>Search Tutors</h3>
        <label htmlFor="language">Language:</label>
        <select id="language" name="language" value={filters.language} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="german">German</option>
          {/* Add options for other languages */}
        </select>
        <label htmlFor="experience">Experience:</label>
        <select id="experience" name="experience" value={filters.experience} onChange={handleFilterChange}>
          <option value="">Any</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <label htmlFor="minPrice">Minimum Price:</label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleFilterChange}
        />
        <label htmlFor="maxPrice">Maximum Price:</label>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleFilterChange}
        />
        <button onClick={handleSearch}>Search</button> {/* Search button */}
      </div>
      <h2>Available Tutors</h2>
      {filteredTutors.length > 0 ? (
        <ul className="tutors-list">
          {filteredTutors.map((tutor) => (
            <li key={tutor.id}>
              <h3>{tutor.name}</h3>
              <p>
                Teaches: {tutor.language} | Experience: {tutor.experience} | Price: ${tutor.price}/hour
              </p>
              {/* Button or link to view tutor profile or book a lesson */}
              <button>View Profile</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tutors found matching your filters. Try adjusting them.</p>
      )}
    </div>
  );
}

export default StudentDashboard;
