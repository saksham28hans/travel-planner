import React,{ useState } from 'react'


const AddDay = () => {
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [type, setType] = useState('Trek');
    const submit = (e) => {
        e.preventDefault();

        const newTrip={
          date,
          place,
          type,
        };
        setDate('');
        setPlace('');
        setType('Trek');
      };
    
      return (
        <div className="form-container">
          <form onSubmit={submit} className="form black-container">
            <label>
              <h3 style={{textAlign: 'center'}}>My Itinerary</h3>
              <br />
              <br />
              <br />
            </label>
            <label>
              Date: <br />
              <input
                id="date"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <label>
              Place: <br />
              <input
                id="place"
                type="text"
                required
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </label>
            <label>
              Type: <br />
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="Trek">Trek</option>
                <option value="Tropic">Tropic</option>
                <option value="Club">Club</option>
              </select>
            </label>
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
      );
    };

export default AddDay
