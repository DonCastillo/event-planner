import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className="description">
                <p> Plan and organize your events effortlessly with Event Planner. From birthdays to corporate meetings, we've got you covered.</p>
                <button className="get-started-button">Get Started</button>
            </section>
            <section className="events_categories">
                <ul>
                    <h2>Family Events</h2>
                    <li>Birthday Party</li>
                    <li>Family Reunion</li>
                    <li>Wedding</li>
                    <li>Anniversary Celebration</li>
                    <li>Baby Shower</li>
                    <li>Graduation Party</li>
                    <li>Holiday Gathering</li>
                    <li>Housewarming</li>
                    <li>Religious Ceremony</li>
                    <li>Funeral or Memorial Service</li>
                </ul>
                <ul>
                    <h2>School Events</h2>
                    <li>Back-to-School Night</li>
                    <li>Parent-Teacher Conference</li>
                    <li>School Assembly</li>
                    <li>Science Fair</li>
                    <li>Sports Day</li>
                    <li>Field Trip</li>
                    <li>Graduation Ceremony</li>
                    <li>School Play or Musical</li>
                    <li>Spirit Week</li>
                    <li>Book Fair</li>
                </ul>
                <ul>
                    <h2>Community Events</h2>
                    <li>Farmers Market</li>
                    <li>Neighborhood Cleanup Day</li>
                    <li>Community Potluck</li>
                    <li>Charity Walk or Run</li>
                    <li>Local Festival or Fair</li>
                    <li>Public Concert or Outdoor Movie</li>
                    <li>Town Hall Meeting</li>
                    <li>Blood Donation Drive</li>
                    <li>Art Show or Craft Market</li>
                    <li>Holiday Parade or Celebration</li>
                </ul>
            </section>
            <section className="features">
                <h2>Features</h2>
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and notifications</li>
                </ul>
            </section>
            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>"Everything was absolutely perfect! The team took care of every detail, and our guests couldn't stop raving about how beautiful and well-organized the event was. Highly recommended!"</p>
                    <p className="author">Sarah L., Wedding Client</p>
                </div>
                <div className="testimonial">
                    <p>"Professional, creative, and stress-free — that's how I'd describe working with this team. They transformed our ideas into a flawless corporate event that impressed everyone."</p>
                    <p className="author">James T., Corporate Client</p>
                </div>
                <div className="testimonial">
                    <p>"From start to finish, the planning process was smooth and enjoyable. They listened to what we wanted and brought our vision to life better than we imagined. We'll definitely book again!"</p>
                    <p className="author">Melissa R., Birthday Celebration Client</p>
                </div>
            </section>
            <section className="contact">
                <h2>Contact</h2>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button className="submit-button">Send</button>
                </form>
            </section>
            <div className="event-planner-container">
                <Footer />
            </div>
        </div>

    );
};

export default EventPlanner;
