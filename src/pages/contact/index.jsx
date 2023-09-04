import './contact.css'
import main_logo from './images/main_logo.png'
import email from './images/email_2.png'
import phone from './images/phone-call_1.png'
import location from './images/location.png'
import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const [successMessage, setSuccessMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('https://formsubmit.co/sales.adsofun@gmail.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Success
            setSuccessMessage('Form submitted successfully');
            setErrorMessage('');
            setFormData({
              name: '',
              email: '',
              phone: '',
              message: '',
            });
          } else {
            // Handle errors
            setErrorMessage('Form submission failed');
            setSuccessMessage('');
          }
        } catch (error) {
          setErrorMessage('An error occurred');
          setSuccessMessage('');
        }

    }

    return(
        <>
            <div className="contact-info">
                <div className="information">
                    <div className="basic-info">
                        <header>
                            <a href="https://www.adsofun.com/">
                                <img src={main_logo} className='logo' alt="" height="100px"/>
                            </a>
                        </header>
                        <h1 className="title">Feel free to talk to us</h1>
                        <p className="text">Thank you for visiting our website today. You can send your inquiries and comments online.</p>
                        <div className="test">
                            <div className="info">
                                <img src={location} className="icon" alt="" height="60px"/>
                                <p>USA Address: 5805 Lawton Court Lanham, Maryland 20706</p>
                                <p> Nigerian Address: 29 Kola-Amodu Crescent, Magodo Lagos, Nigeria</p>
                            </div>
                            <div className="info">
                                <img src={email} className="icon" alt="" height="50px"/>
                                <p className='info-text'>sales.adsofun@gmail.com</p>
                            </div>
                            <div className="info">
                                <img src={phone} className="icon" alt="" height="50px"/>
                                <p className='info-text'>+1-240-217-1665</p>
                                <p className='info-text'>+234-802-842-6041</p>
                            </div>   
                        </div>
                    </div>
                </div>
        
                <div className="information">
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <h3 className="title">Contact us</h3>
                            {successMessage && <div className="success-alert">{successMessage}</div>}
                            {errorMessage && <div className="error-alert">{errorMessage}</div>}
                            <div className="input-container">
                              <input 
                              type="text" 
                              placeholder="Username" 
                              className="input" 
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required/>
                            </div>
                            <div className="input-container">
                              <input 
                              placeholder="Email" 
                              className="input" 
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required/>
                            </div>
                            <div className="input-container">
                              <input  
                                placeholder="Phone" 
                                className="input" 
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required/>
                            </div>
                            <div className="input-container textarea">
                              <textarea 
                                className="input" 
                                placeholder="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                              required
                              >
                              </textarea>
                                <button className='btn' type='submit'>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Contact