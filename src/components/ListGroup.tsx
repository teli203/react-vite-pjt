import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  {
    name: 'Berlin',
    attractions: ['Brandenburg Gate', 'Berlin Wall', 'Museum Island'],
    timezone: 'Europe/Berlin',
    holidays: ['German Unity Day', 'Christmas', 'New Year’s Day'],
  },
  {
    name: 'Toronto',
    attractions: ['CN Tower', 'Ripley’s Aquarium', 'Royal Ontario Museum'],
    timezone: 'America/Toronto',
    holidays: ['Canada Day', 'Victoria Day', 'Christmas'],
  },
  {
    name: 'Mexico City',
    attractions: ['Zocalo', 'Chapultepec Park', 'Frida Kahlo Museum'],
    timezone: 'America/Mexico_City',
    holidays: ['Day of the Dead', 'Independence Day', 'Christmas'],
  },
  {
    name: 'Moscow',
    attractions: ['Red Square', 'Kremlin', 'Saint Basil’s Cathedral'],
    timezone: 'Europe/Moscow',
    holidays: ['Victory Day', 'New Year’s Day', 'Christmas'],
  },
  {
    name: 'Seoul',
    attractions: [
      'Gyeongbokgung Palace',
      'N Seoul Tower',
      'Myeong-dong Shopping Street',
    ],
    timezone: 'Asia/Seoul',
    holidays: ['Chuseok', 'Seollal', 'Independence Day'],
  },
  {
    name: 'Los Angeles',
    attractions: [
      'Hollywood Sign',
      'Griffith Observatory',
      'Santa Monica Pier',
    ],
    timezone: 'America/Los_Angeles',
    holidays: ['Independence Day', 'Thanksgiving', 'Christmas'],
  },
  {
    name: 'Mumbai',
    attractions: ['Gateway of India', 'Marine Drive', 'Elephanta Caves'],
    timezone: 'Asia/Kolkata',
    holidays: ['Diwali', 'Holi', 'Independence Day'],
  },
  {
    name: 'Rio de Janeiro',
    attractions: [
      'Christ the Redeemer',
      'Copacabana Beach',
      'Sugarloaf Mountain',
    ],
    timezone: 'America/Sao_Paulo',
    holidays: ['Carnival', 'Independence Day', 'Christmas'],
  },
  {
    name: 'Johannesburg',
    attractions: ['Apartheid Museum', 'Gold Reef City', 'Lion Park'],
    timezone: 'Africa/Johannesburg',
    holidays: ['Freedom Day', 'Heritage Day', 'Christmas'],
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
    <div className="container mt-4">
      <h1 className="text-primary text-center">Explore Global Cities</h1>
      {cities.length === 0 && <p className="text-danger">No cities found</p>}
      <ul className="list-group mt-3">
        {cities.map((city) => (
          <li
            className={`list-group-item list-group-item-action ${selectedCity?.name === city.name ? 'active' : ''}`}
            key={city.name}
            onClick={() => setSelectedCity(city)}
            style={{ cursor: 'pointer' }}
          >
            {city.name}
          </li>
        ))}
      </ul>
      {selectedCity && (
        <div className="card mt-4 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-center">{selectedCity.name}</h2>
            <h4 className="text-secondary">Attractions</h4>
            <ul className="list-group">
              {selectedCity.attractions.map((attraction, index) => (
                <li className="list-group-item" key={index}>
                  {attraction}
                </li>
              ))}
            </ul>
            <h4 className="mt-3 text-secondary">Current Date and Time</h4>
            <p className="fw-bold">{currentTime}</p>
            <h4 className="mt-3 text-secondary">Holidays Celebrated</h4>
            <ul className="list-group">
              {selectedCity.holidays.map((holiday, index) => (
                <li className="list-group-item" key={index}>
                  {holiday}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListGroup;
