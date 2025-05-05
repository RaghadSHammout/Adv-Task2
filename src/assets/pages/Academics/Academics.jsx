import GallerySection from '../../../../src/components/GallerySection/GallerySection'
import Features from '../../../components/Features/Features'
import Hero2Card from '../../../components/Hero2Card/Hero2Card'
import Subjects from '../../../components/Subjects/Subjects'
const Academics = () => {
  const topSectionText ={
    text:'Academics',
  }
  return (
    <>
    <Hero2Card  
    heroTitle={'Nurturing Young Minds for Success'}
     heroText={'Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten schools academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration'}
     topSectionProps={topSectionText}
     />
     <Features/>
     <Subjects/>
    <GallerySection/>
    </>
  )
}

export default Academics
