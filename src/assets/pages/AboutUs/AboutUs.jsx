import Awards from '../../../components/Awards/Awards'
import Hero2Card from '../../../components/Hero2Card/Hero2Card'
import MissionAndVission from '../../../components/MissionAndVission/MissionAndVission'
import TeacherProfiles from '../../../components/TeacherProfiles/TeacherProfiles'
import Timeline from '../../../components/Timeline/Timeline'

const AboutUs = () => {
  const topSectionText = {
    text: 'Overview',
  }
  return (
    <>
      <Hero2Card
        heroTitle={'Welcome to Little Learners Academy'}
        heroText={'A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.'}
        topSectionProps={topSectionText}
      />
      <MissionAndVission />
      <Awards />
      <Timeline />
      <TeacherProfiles />
    </>
  )
}

export default AboutUs
