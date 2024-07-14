import { useSelector } from "react-redux";
import Bookingform from "./components/Bookingform";
import ConfirmationPopup from "./components/ConfirmationPopup";
import { useState } from "react";
import HorseCard from "./components/HorseCard";

const horses = [
  { name: 'Juliet', image: 'src/assets/horse5.jpg' },
  { name: 'Jaguar', image: 'src/assets/horse4.jpg' },
  { name: 'Rio', image: 'src/assets/horse7.jpg' },
  { name: 'Misty', image: 'src/assets/horse2.jpg' }
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
