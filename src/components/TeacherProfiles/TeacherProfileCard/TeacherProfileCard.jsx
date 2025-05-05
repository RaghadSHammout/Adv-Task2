import './TeacherProfileCard.css'
import { MdEmail } from "react-icons/md";

const TeacherProfileCard = ({ name, qualification, description, image }) => {
    return (
        <div className='teacher-card'>
            <div className="teacher-header">
                <div className="teacher-avatar-container">
                    <img src={image} alt={name} className='teacher-avatar' />
                </div>
                <h2 className='teacher-name'>{name}</h2>
                <button className='mail-button'>
                <MdEmail size={24} />
                </button>
            </div>

            <div className="teacher-details">
                <h3 className="teacher-qualification">{qualification}</h3>
                <p className="teacher-description">{description}</p>
            </div>
        </div>
    )
}

export default TeacherProfileCard
