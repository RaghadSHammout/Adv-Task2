import './Benefits.css'
import TopSections from '../TopSections/TopSections'
import Card from '../Card/Card'

const cardsData = [
    { cardIcon: '/images/icons/ico1.png', benfitsCardTitle: 'Holistic Learning Approach', benfitsCardParagraph: 'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.' },
    { cardIcon: '/images/icons/ico2.png', benfitsCardTitle: 'Experienced Educators', benfitsCardParagraph: 'Our passionate and qualified teachers create a supportive and stimulating learning environment.' },
    { cardIcon: '/images/icons/ico3.png', benfitsCardTitle: 'Nurturing Environment', benfitsCardParagraph: 'We prioritize safety and provide a warm and caring atmosphere for every child.' },
    { cardIcon: '/images/icons/ico4.png', benfitsCardTitle: 'Play-Based Learning', benfitsCardParagraph: 'We believe in the power of play to foster creativity, problem-solving skills, and imagination.' },
    { cardIcon: '/images/icons/ico5.png', benfitsCardTitle: 'Individualized Attention', benfitsCardParagraph: 'Our small class sizes enable personalized attention, catering to each childs unique needs.' },
    { cardIcon: '/images/icons/ico6.png', benfitsCardTitle: 'Parent Involvement', benfitsCardParagraph: 'We foster a strong parent-school partnership to ensure seamless communication and collaboration.' },
]

const Benefits = () => {
    return (
        <div className='benefits'>
            <TopSections text={'Children Deserve Bright Future'} title={'Our Benefits'} subtitle={'With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your childs future.'}  className="center" />
            <div className="benefits-container">
            {cardsData.map((item, index) => (
          <Card
            key={index}
            cardIcon={item.cardIcon}
            CardTitle={item.benfitsCardTitle}
            CardParagraph={item.benfitsCardParagraph}
          />
        ))}
            </div>
        </div>
    )
}

export default Benefits
