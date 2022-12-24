import React, { useState } from 'react';

function RecordList() {
  const [records, setRecords] = useState([
    { id: 1, name: 'Record 1' },
    { id: 2, name: 'Record 2' },
    { id: 3, name: 'Record 3' },
    { id: 4, name: 'Record 4' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const filteredRecords = records.filter(record => record.name.includes(searchTerm));

}
const Search = () => {
    <div>
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
    />
    <ul>
      {filteredRecords.map(record => (
        <li key={record.id}>{record.name}</li>
      ))}
    </ul>
  </div>
}

export default Search