import './PreviewCard.css'

const PreviewCard = () => {
  return (
    <div className='preview-card'>
      <img src={require('../../assets/images/logo.png')} alt='Weather logo' width='250px'/>
    </div>
  )
}

export default PreviewCard