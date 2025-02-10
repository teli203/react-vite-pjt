import { useState, useEffect } from 'react';

interface City {
  name: string;
  attractions: string[];
  timezone: string;
  holidays: string[];
}

const cities: City[] = [
  {
    name: 'New York',
    attractions: ['Statue of Liberty', 'Central Park', 'Times Square'],
    timezone: 'America/New_York',
    holidays: ['Independence Day', 'Thanksgiving', 'Christmas'],
  },
  {
    name: 'San Francisco',
    attractions: ['Golden Gate Bridge', 'Alcatraz Island', 'Fisherman’s Wharf'],
    timezone: 'America/Los_Angeles',
    holidays: ['Independence Day', 'Thanksgiving', 'Christmas'],
  },
  {
    name: 'Tokyo',
    attractions: ['Shibuya Crossing', 'Tokyo Tower', 'Senso-ji Temple'],
    timezone: 'Asia/Tokyo',
    holidays: ['New Year’s Day', 'Golden Week', 'Respect for the Aged Day'],
  },
  {
    name: 'London',
    attractions: ['Big Ben', 'London Eye', 'Buckingham Palace'],
    timezone: 'Europe/London',
    holidays: ['Christmas', 'Boxing Day', 'Easter Monday'],
  },
  {
    name: 'Paris',
    attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre Dame Cathedral'],
    timezone: 'Europe/Paris',
    holidays: ['Bastille Day', 'Christmas', 'Labour Day'],
  },
  {
    name: 'Sydney',
    attractions: ['Sydney Opera House', 'Bondi Beach', 'Harbour Bridge'],
    timezone: 'Australia/Sydney',
    holidays: ['Australia Day', 'Anzac Day', 'Christmas'],
  },
  {
    name: 'Dubai',
    attractions: ['Burj Khalifa', 'Palm Jumeirah', 'Dubai Mall'],
    timezone: 'Asia/Dubai',
    holidays: ['National Day', 'Eid al-Fitr', 'Eid al-Adha'],
  },
  {
    name: 'Rome',
    attractions: ['Colosseum', 'Vatican Museums', 'Trevi Fountain'],
    timezone: 'Europe/Rome',
    holidays: ['Epiphany', 'Liberation Day', 'Christmas'],
  },
  {
    name: 'Bangkok',
    attractions: ['Grand Palace', 'Wat Arun', 'Floating Markets'],
    timezone: 'Asia/Bangkok',
    holidays: ['Songkran', 'King’s Birthday', 'New Year’s Day'],
  },
  {
    name: 'Istanbul',
    attractions: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar'],
    timezone: 'Europe/Istanbul',
    holidays: ['Republic Day', 'Victory Day', 'Eid al-Fitr'],
  },
];

function ListGroup() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    if (selectedCity) {
      const updateTime = () => {
        const options: Intl.DateTimeFormatOptions = {
          timeZone: selectedCity.timezone,
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        };
        setCurrentTime(
          new Intl.DateTimeFormat('en-US', options).format(new Date())
        );
      };
      updateTime();
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    }
  }, [selectedCity]);

  return (
    <>
      <h1>Cities</h1>
      {cities.length === 0 && <p>No cities found</p>}
      <ul className="list-group">
        {cities.map((city) => (
          <li
            className={
              selectedCity?.name === city.name
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={city.name}
            onClick={() => setSelectedCity(city)}
          >
            {city.name}
          </li>
        ))}
      </ul>
      {selectedCity && (
        <div className="mt-3">
          <h2>Attractions in {selectedCity.name}</h2>
          <ul className="list-group">
            {selectedCity.attractions.map((attraction, index) => (
              <li className="list-group-item" key={index}>
                {attraction}
              </li>
            ))}
          </ul>
          <h3 className="mt-3">Current Date and Time</h3>
          <p>{currentTime}</p>
          <h3 className="mt-3">Holidays Celebrated</h3>
          <ul className="list-group">
            {selectedCity.holidays.map((holiday, index) => (
              <li className="list-group-item" key={index}>
                {holiday}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default ListGroup;
