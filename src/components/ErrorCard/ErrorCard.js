import './ErrorCard.css'

const ErrorCard = ({ statusCode }) => {
  return (
    <div className='error-card'>
      {/* <div className='status-error'>
        404
      </div> */}
      <div className='message-error'>
        {statusCode}: {statusCode === 404 ? 'We can\'t find the city you are looking for.' : 'Bad request.'}
      </div>
    </div>
  )
}

export default ErrorCard