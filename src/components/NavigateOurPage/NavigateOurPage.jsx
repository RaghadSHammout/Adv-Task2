import './NavigateOurPage.css'
import TopSections from '../TopSections/TopSections'
import NavigateCard from './NavigateCard/NavigateCard'

const navigateData = [
    {
        title: 'About Us',
        line: '/images/dotted-line.png',
        text: 'Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.'
    },
    {
        title: 'Academics',
        line: '/images/dotted-line.png',
        text: 'Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.'
    },
    {
        title: 'Student Life',
        line: '/images/dotted-line.png',
        text: 'Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, and social events that make our community special.'
    },
    {
        title: 'Admissions',
        line: '/images/dotted-line.png',
        text: 'Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.'
    }

];



const NavigateOurPage = () => {
    return (
        <>
            <TopSections text={'Explore More'} title={'Navigate through our Pages'} subtitle={'Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school'} />
            <div className='navigate-card-container'>
                {navigateData.map((item, index) => (
                    <NavigateCard
                        key={index}
                        title={item.title}
                        line={item.line}
                        text={item.text}
                    />
                ))}
            </div>
        </>
    );
}

export default NavigateOurPage
