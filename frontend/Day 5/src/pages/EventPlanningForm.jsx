import flowersImage from '../assets/images/flowersImage.jpg'; 
import balloonImage from '../assets/images/ballonImage.jpg';
import lightsImage from '../assets/images/lightsImage.jpg';
import '../assets/css/serviceFormPage.css'; 
import { useState } from 'react';
import cateringImage from '../assets/images/cake.jpg';
import photographyImage from '../assets/images/photo.jpeg';
import sing from '../assets/images/singing.jpeg';
import dancingImage from '../assets/images/dancingreal.jpeg';
import karaokeImage from '../assets/images/karaoke.jpg';
import magicShowImage from '../assets/images/magic.jpg';
import dj from '../assets/images/dj.jpg';
import { Link } from 'react-router-dom';

const Popup = ({ category, value, onClose }) => {

  const imageMappings = {
    decorations: {
      flowers: { image: flowersImage, description: "Beautiful flowers", price: "$20" },
      balloons: { image: balloonImage, description: "Colorful balloons", price: "$15" },
      lights: { image: lightsImage, description: "Festive lights", price: "$25" },
    },
    photography: {
      photography: { image: photographyImage, description: "Professional photography", price: "$150" },
    },
    catering: {
      catering: { image: cateringImage, description: "Delicious catering", price: "$100" },
    },
    entertainment: {
      sing: { image: sing, description: "Live singing performance", price: "$50" },
      dancing: { image: dancingImage, description: "Exciting dance show", price: "$70" },
      karaoke: { image: karaokeImage, description: "Karaoke fun", price: "$40" },
      magicShow: { image: magicShowImage, description: "Amazing magic show", price: "$80" },
      dj: { image: dj, description: "DJ entertainment", price: "$90" },
    },
  };
  
  const getImageSource = (category, value) => {
    const categoryMap = imageMappings[category];
    if (categoryMap && categoryMap[value]) {
      return categoryMap[value].image;
    } else {
      return null; // Handle cases where image source is not found
    }
  };

  const getDescription = (category, value) => {
    const categoryMap = imageMappings[category];
    if (categoryMap && categoryMap[value]) {
      return categoryMap[value].description;
    } else {
      return ""; // Return an empty string if description is not found
    }
  };

  // Function to get the price estimate based on category and value
  const getPriceEstimate = (category, value) => {
    const categoryMap = imageMappings[category];
    if (categoryMap && categoryMap[value]) {
      return categoryMap[value].price;
    } else {
      return ""; // Return an empty string if price estimate is not found
    }
  };
  
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(true);
    // Ensure onSelect is defined and callable
    if (typeof onSelect === 'function') {
      onselect(category, value);
    }
    // Set a timeout to close the popup after 3000 milliseconds
    setTimeout(() => {
      console.log("Closing popup automatically...");
      // Ensure onClose is defined and callable
      if (typeof onClose === 'function') {
        onClose();
      }
    }, 200);
  };
  
  
  
  

  const handleFormSubmit = () => {
    // Construct the URL with selected items as parameters
    const selectedItemsParams = new URLSearchParams();
    for (const category in selectedOptions) {
      selectedOptions[category].forEach(item => {
        selectedItemsParams.append(category, item);
      });
    }
    // Navigate to the Receipt page with the selected items as parameters
    return <Link to={{ pathname: "/receipt", state: { selectedItems: selectedItemsParams.toString() } }} />;
  };
  
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2 className="event-title-form-service">Selected Option</h2>
        <img src={getImageSource(category, value)} alt={value} />
        <p>Description: {getDescription(category, value)}</p>
        <p>Price Estimate: {getPriceEstimate(category, value)}</p>
        {selected ? (
          <p>Selected!</p>
        ) : (
          <button onClick={handleSelect}>Select</button>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};



function EventPlanningForm() {
    const [selectedOptions] = useState({
      decorations: [],
      photography: [],
      catering: [],
      entertainment: [],
    });
  
    const [setAllSelectedOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleImageInputChange = (category, value) => {
    setSelectedOption({ category, value });
  };

  const closePopup = () => {
    setSelectedOption(null);
  };

  const updateAllSelectedOptions = () => {
    const allOptions = Object.values(selectedOptions).reduce((acc, cur) => acc.concat(cur), []);
    setAllSelectedOptions(allOptions);
  };

  const handleFormSubmit = () => {
    // Construct the URL with selected items as parameters
    const selectedItemsParams = new URLSearchParams();
    for (const category in selectedOptions) {
      selectedOptions[category].forEach(item => {
        selectedItemsParams.append(category, item);
      });
    }
    // Navigate to the Receipt page with the selected items as parameters
    return <Link to={{ pathname: "/receipt", state: { selectedItems: selectedItemsParams.toString() } }} />;
  };

  
    return (
      <div className="container-service-service">
        <h1 className="title-service">Event Planning Form</h1>
        <form className="event-form">
          <div className="form-group">
            <label className="event-title-form-service">Decorations</label>
            <div className="image-options">
              <div className={`image-option ${selectedOptions.decorations.includes('flowers') ? 'selected' : ''}`} onClick={() => handleImageInputChange('decorations', 'flowers')}>
                <img src={flowersImage} alt="Flowers" />
              </div>
              <div className={`image-option ${selectedOptions.decorations.includes('balloons') ? 'selected' : ''}`} onClick={() => handleImageInputChange('decorations', 'balloons')}>
                <img src={balloonImage} alt="Balloons" />
              </div>
              <div className={`image-option ${selectedOptions.decorations.includes('lights') ? 'selected' : ''}`} onClick={() => handleImageInputChange('decorations', 'lights')}>
                <img src={lightsImage} alt="Lights" />
              </div>
            </div>
            {selectedOptions.decorations.length > 0 && (
              <div>Selected: {selectedOptions.decorations.join(', ')}</div>
            )}
          </div>
          <div className="form-group">
            <label className="event-title-form-service">Photography</label>
            <div className="image-options">
              <div className={`image-option ${selectedOptions.photography.includes('photography') ? 'selected' : ''}`} onClick={() => handleImageInputChange('photography', 'photography')}>
                <img src={photographyImage} alt="Photography" />
              </div>
            </div>
            {selectedOptions.photography.length > 0 && (
              <div>Selected: {selectedOptions.photography.join(', ')}</div>
            )}
          </div>
          <div className="form-group">
            <label className="event-title-form-service">Catering</label>
            <div className="image-options">
              <div className={`image-option ${selectedOptions.catering.includes('catering') ? 'selected' : ''}`} onClick={() => handleImageInputChange('catering', 'catering')}>
                <img src={cateringImage} alt="Catering" />
              </div>
            </div>
            {selectedOptions.catering.length > 0 && (
              <div>Selected: {selectedOptions.catering.join(', ')}</div>
            )}
          </div>
          <div className="form-group">
            <label className="event-title-form-service">Entertainment</label>
            <div className="image-options">
              <div className={`image-option ${selectedOptions.entertainment.includes('sing') ? 'selected' : ''}`} onClick={() => handleImageInputChange('entertainment', 'sing')}>
                <img src={sing} alt="singing" />
              </div>
              <div className={`image-option ${selectedOptions.entertainment.includes('dancing') ? 'selected' : ''}`} onClick={() => handleImageInputChange('entertainment', 'dancing')}>
                <img src={dancingImage} alt="Dancing" />
              </div>
              <div className={`image-option ${selectedOptions.entertainment.includes('karaoke') ? 'selected' : ''}`} onClick={() => handleImageInputChange('entertainment', 'karaoke')}>
                <img src={karaokeImage} alt="Karaoke" />
              </div>
              <div className={`image-option ${selectedOptions.entertainment.includes('magicShow') ? 'selected' : ''}`} onClick={() => handleImageInputChange('entertainment', 'magicShow')}>
                <img src={magicShowImage} alt="Magic Show" />
              </div>
              <div className={`image-option ${selectedOptions.entertainment.includes('dj') ? 'selected' : ''}`} onClick={() => handleImageInputChange('entertainment', 'dj')}>
                <img src={dj} alt="dj" />
              </div>
            </div>
            {selectedOptions.entertainment.length > 0 && (
              <div>Selected: {selectedOptions.entertainment.join(', ')}</div>
            )}
          </div>
          <Link to={{ pathname: "/cart", state: { selectedItems } }}>
        <button type="button" className="submit-button">Submit</button>
      </Link>
        {/* Render Popup if selectedOption is not null */}
        {selectedOption && (
          <div className="popup-container">
            <Popup
              category={selectedOption.category}
              value={selectedOption.value}
              onClose={closePopup} // Pass the closePopup function as onClose prop
              onSelect={handleImageInputChange} // Pass the handleImageInputChange function as onSelect prop
            />


          </div>
        )}

        </form>
        {/* Display selected items */}
        <div className="selected-items">
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>{item.category}: {item.value}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default EventPlanningForm;