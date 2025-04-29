import './NavigateCard.css'
const NavigateCard = ({title , line , text } ) => {
  return (
    <div className='navigate_card'>
      <h2 className='navigate_card_title'>{title}</h2>
      <img src={line} alt="dotted-line" className='navigate_card_line' />
      <p className='navigate_card_text'>{text}</p>
      <button className='navigate_card_btn'><a href="">Learn More <img src="/images/arrowRight.png" alt="" width={20} /> </a></button>
    </div>
  )
}

export default NavigateCard
