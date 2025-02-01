import '../styles/Contact.css';


const Contact=()=>{
    return(
        <>
        <div className="contact-container">
        <h1 className='contact_heading'>Contact Us</h1>
        <p className='contact_para'>If you have any inquiries, feedback, or require assistance, our dedicated support team is here to help. Your satisfaction is our priority, and we value your engagement with our platform.</p>

        <div className="contact-info">
            <p className='contact_para'><strong>Contact Information:</strong></p>
            <p className='contact_para'>Customer Support Helpline: <a href="tel:+917777947913" className="hotline">+91 7777947913</a></p>
        </div>
      <div className="support">
        <p className='contact_para'>Our support team operates 24x7 to assist you promptly. Feel free to reach out to us for any of the following:</p>
        <ul>
          <li><strong>1.Account Assistance:</strong> If you encounter any issues with your account, password recovery, or account verification, our support team is ready to guide you through the process.</li>
          <li><strong>2.Technical Support:</strong> For technical glitches, payment gateway concerns, or other technical issues, our knowledgeable team is equipped to provide timely solutions.</li>
          <li><strong>3.General Inquiries:</strong> Have questions about our services, promotions, or terms and conditions? We're here to provide clarity and ensure a seamless experience.</li>
          <li><strong>4.Responsible Gaming Support:</strong> If you need assistance with setting limits or self-exclusion, our support team is here to help.</li>
          <li><strong>5.Feedback and Suggestions:</strong> Your input is invaluable to us. If you have suggestions for improvement, we welcome your feedback.</li>
        </ul>
      </div>
      <div className="note">
        <p className='contact_note'>Connect with us through the provided email or hotline, and our team will strive to address your queries promptly and efficiently. Thank you for choosing Reddy Anna Book Official – where entertainment meets excellence!</p>
      </div>

      <div className="form-container">
      <h2 className='form_heading'>Feel free to contact</h2>
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email *" required />
          <input type="text" placeholder="Phone" />
        </div>
        <div className="form-row">
          <select>
            <option value="">Position</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
          <input type="date" placeholder="Start Date" />
        </div>
        <div className="form-row">
          <input type="url" placeholder="Link to CV/LinkedIn" />
        </div>
        <center><button className='submit_btn' type="submit">Apply Now</button></center>
      </form>
    </div>
    <div className="contact-section">
          <button className="contact-btn">Opne Your Account</button>
          <button className="contact-btn">Contact Us Now</button>
        </div>
    </div>
        
        </>
    );
};
export default Contact;