import './MissionAndVission.css'
import TopSections from '../TopSections/TopSections'
import Card from '../Card/Card'

const MissionAndVission = () => {
const    cardsData = [
       { id:'1' ,
        image:'/images/mission-icon.png',
        title:'Mission',
        text:'At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.',
    },
       { id:'2' ,
        image:'/images/vision-icon.png',
        title:'Vision',
        text:'Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.',
    }
    ]
  return (
   <>
   <TopSections text={'Mission & Visions'} title={'Our Mission & Visions'} subtitle={'We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.'} className='center'/>
   <div className="mv-container">
            {cardsData.map((item) => (
          <Card
            key={item.id}
            cardIcon={item.image}
            CardTitle={item.title}
            CardParagraph={item.text}
            mvCard='mv-card'
          />
        ))}
            </div>
   </>
  )
}

export default MissionAndVission
