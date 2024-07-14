import { useSelector } from "react-redux";
import Bookingform from "./components/Bookingform";
import ConfirmationPopup from "./components/ConfirmationPopup";
import { useState } from "react";
import HorseCard from "./components/HorseCard";
import horse1 from "./assets/horse5.jpg"
import horse2 from "./assets/horse4.jpg"
import horse3 from "./assets/horse7.jpg"
import horse4 from "./assets/horse2.jpg"

const horses = [
  { name: 'Juliet', image: horse1 },
  { name: 'Jaguar', image: horse2 },
  { name: 'Rio', image: horse3 },
  { name: 'Misty', image: horse4 }
];
function App() {
  const [selectedHorse, setSelectedHorse] = useState(null);
  const bookingConfirmed = useSelector((state) => state.booking.confirmed);
  return (
    <div className="App container-fluid" id="close">
      <h1 className="text-center text-white py-3">Horse Ride Booking System 🏇</h1>
      <hr className='my-3 text-white mx-5' style={{ border: '1px solid white' }} />
      {!selectedHorse && !bookingConfirmed && (
        <div className="landing-page gap-4">
          {horses.map((horse) => (
            <HorseCard key={horse.name} horse={horse} onSelect={setSelectedHorse} />
          ))}
        </div>
      )}
      {selectedHorse && !bookingConfirmed && (
        <Bookingform selectedHorse={selectedHorse} onBack={() => setSelectedHorse(null)} />
      )}
      {bookingConfirmed && <ConfirmationPopup />}
    </div>
    
  )
}

export default App
