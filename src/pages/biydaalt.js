import { useState } from 'react';

const studentsData = [
  { id: 1, name: "Amartuwshin", age: 16, class: "11A", rollNumber: "101" },
  { id: 2, name: "Anar-Erdene", age: 17, class: "11A", rollNumber: "102" },
  { id: 3, name: "Tselmeg", age: 16, class: "11A", rollNumber: "103" },
  { id: 4, name: "Shine-Erdene", age: 16, class: "11A", rollNumber: "104" },
  { id: 5, name: "Temuulen", age: 16, class: "11A", rollNumber: "101" },
  { id: 6, name: "Sh.Temuujin", age: 16, class: "11A", rollNumber: "102" },
  { id: 7, name: "E.Temuujin", age: 16, class: "11A", rollNumber: "103" },
  { id: 8, name: "Enhtugs", age: 16, class: "11A", rollNumber: "104" },
  { id: 9, name: "Enkhjaw", age: 16, class: "11A", rollNumber: "101" },
  { id: 10, name: "Ochir-Erdene", age: 16, class: "11B", rollNumber: "102" },
  { id: 11, name: "Hanbileg", age: 16, class: "11A", rollNumber: "103" },
  { id: 12, name: "Tugs-Asralt", age: 16, class: "11A", rollNumber: "104" },
  { id: 13, name: "Batmend", age: 16, class: "11A", rollNumber: "101" },
  { id: 14, name: "Emily", age: 16, class: "11A", rollNumber: "102" },
  { id: 15, name: "Dalaisuren", age: 16, class: "11A", rollNumber: "103" },
  { id: 16, name: "Choi-Odser", age: 16, class: "11A", rollNumber: "104" }
];

const StudentsPage = () => {
  const [students, setStudents] = useState(studentsData);
  const [viewType, setViewType] = useState('list'); 
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredStudents = studentsData.filter((student) =>
      student.name.toLowerCase().includes(query)
    );
    setStudents(filteredStudents);
  };

  const toggleView = () => {
    setViewType(viewType === 'list' ? 'grid' : 'list');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'black' }}>Student Management</h1>

      
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Нэр хайх"
        style={{
          color: 'black',
          padding: '8px',
          marginBottom: '20px',
          width: '100%',
          maxWidth: '400px',
        }}
      />

      
      <button
        onClick={toggleView}
        style={{
          padding: '10px',
          marginBottom: '20px',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
         {viewType === 'list' ? 'Grid' : 'List'} View
      </button>

     
      {viewType === 'list' ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {students.map((student) => (
            <div
              key={student.id}
              style={{
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
                marginBottom: '10px',
              }}
            >
              <p style={{ color: 'black' }}><strong>Name:</strong> {student.name}</p>
              <p style={{ color: 'black' }}><strong>Age:</strong> {student.age}</p>
              <p style={{ color: 'black' }}><strong>Class:</strong> {student.class}</p>
              <p style={{ color: 'black' }}><strong>Roll Number:</strong> {student.rollNumber}</p>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}
        >
          {students.map((student) => (
            <div
              key={student.id}
              style={{
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <p style={{ color: 'black' }}><strong>{student.name}</strong></p>
              <p style={{ color: 'black' }}>Age: {student.age}</p>
              <p style={{ color: 'black' }}>Class: {student.class}</p>
              <p style={{ color: 'black' }}>Roll Number: {student.rollNumber}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentsPage;