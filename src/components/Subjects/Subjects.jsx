import Card from '../Card/Card'
import TopSections from'../TopSections/TopSections'
const Subjects = () => {
    const cardsData =[
        { cardIcon: '/images/subject1.png', CardTitle: 'Language Arts', CardParagraph: 'Reading, writing, storytelling, and communication skills.' },
        { cardIcon: '/images/subject2.png', CardTitle: 'Mathematics', CardParagraph: 'Number sense, basic operations, problem-solving, and logic.' },
        { cardIcon: '/images/subject3.png', CardTitle: 'Science', CardParagraph: 'Exploring the natural world through hands-on experiments and investigations.' },
        { cardIcon: '/images/subject4.png', CardTitle: 'Social Studies', CardParagraph: 'Cultivating an understanding of diverse cultures and communities.' },
        { cardIcon: '/images/subject5.png', CardTitle: 'Arts and Crafts', CardParagraph: 'Encouraging creativity through various art forms and crafts.' },
        { cardIcon: '/images/subject6.png', CardTitle: 'Physical Education', CardParagraph: 'Promoting physical fitness, coordination, and teamwork.' },
    ]
    
    return (
        <div className='subjects'>
        <TopSections text={'Our Subjects'} title={'What Students Learn'} subtitle={'At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include'} className="center"/>
      <div className="features-container">
      {cardsData.map((item, index) => (
          <Card
            key={index}
            cardIcon={item.cardIcon}
            CardTitle={item.CardTitle}
            CardParagraph={item.CardParagraph}
             subjectCard="subject-card"
          />
        ))}
      </div>
    </div>
  )
}

export default Subjects
