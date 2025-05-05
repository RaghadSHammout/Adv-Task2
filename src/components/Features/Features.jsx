import React from 'react'
import TopSections from '../TopSections/TopSections'
import Card from '../Card/Card'
import './Features.css'

const Features = () => {
   const cardsData =[
        { cardIcon: '/images/icons/icon7.png', CardTitle: 'Thematic Learning', CardParagraph: 'Our curriculum is centered around engaging themes that capture childrens imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.' },
        { cardIcon: '/images/icons/icon8.png', CardTitle: 'STEAM Education', CardParagraph: 'We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.' },
        { cardIcon: '/images/icons/icon9.png', CardTitle: 'Language Immersion', CardParagraph: 'Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.' },
        { cardIcon: '/images/icons/icon10.png', CardTitle: 'Art and Creativity', CardParagraph: 'Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.' },
        { cardIcon: '/images/icons/icon11.png', CardTitle: 'Outdoor Education', CardParagraph: 'Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.' },
        { cardIcon: '/images/icons/icon12.png', CardTitle: 'Play-Based Learning', CardParagraph: 'Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.' },
    ]
  return (
    <div className='features'>
        <TopSections text={'Our Features'} title={'Our Special Features'} subtitle={'Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!'} className="center"/>
      <div className="features-container">
      {cardsData.map((item, index) => (
          <Card
            key={index}
            cardIcon={item.cardIcon}
            CardTitle={item.CardTitle}
            CardParagraph={item.CardParagraph}
          />
        ))}
      </div>
    </div>
  )
}

export default Features
