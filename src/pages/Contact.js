import React from 'react';
import ContactUs from '../components/forms/ContactUs'
import Fade from 'react-reveal/Fade'

const Contact = () => {
  const contact = (
    <p>
      For immidiate assistance or to reach directly, please call us at <a style={{color: 'black'}}
          href="tel: +1-631-477-4000"> 631-477-4000 </a>.<br></br>
      For all other inquiries and requests, please fill in the form below.
    </p>
    
  )

  return (
    <Fade distance="25px" bottom>
      <ContactUs
        contact={contact}
      />
    </Fade>
  );
};

export default Contact;