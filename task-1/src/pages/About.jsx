import { MdComputer } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";
function About(){
    return(
        <>
        <section id="about">
        <h2 className="texting-head">Niyə bizim proqram?</h2>
        <div className="about">
            <div className="about-item">
                <MdComputer className="texting-icon" />
                <p className="texting">Real layihələr</p>
            </div>
            <div className="about-item">
                <IoMdPeople className="texting-icon" />
                <p className="texting">Mentor dəstəyi</p>
            </div>
            <div className="about-item">
                <FaChartLine className="texting-icon" />
                <p className="texting">İnkişaf</p>
            </div>
        </div>
        </section>
        </>
    )
}
export default About;