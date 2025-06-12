// rrd import
import { NavLink } from "react-router-dom";

// Components
import Footer from "../components/Footer";
import MissionVision from "../components/MissionVision";
import Testimonials from "../components/Testimonials";
import WhySchool from "../components/WhySchool";

const Home = () => {
    return ( 
        <>
            <div className="home">
                <p className="title">Welcome to Blue Bell's School<span style={{color: '#0b8219'}}></span></p>
                <p className="info">We are delighted to welcome you to the official online home of Blue Bells English Medium School — a Citadel of Excellence where young minds blossom, talents shine, and values are deeply rooted.

At Blue Bells, we believe education is not just about books and classrooms — it’s about creating a vibrant, inclusive, and nurturing space where:

📚 Academic excellence is pursued with passion,

🎨 Creativity is celebrated and encouraged,

🌍 Diversity is embraced with respect,

❤️ And every child is valued as a unique individual.</p>
                <NavLink to='/about'>Explore</NavLink>
            </div>
            <MissionVision />
            <WhySchool />
            <Testimonials />
            <Footer />
        </>
    );
}
 
export default Home;