import PropTypes from "prop-types"

function OldApp(props) {
  const { message } = props
  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>

      <div>
        <h2>Tsuki Baby Cat</h2>
        <p data-testid="pTag">He is just this big</p>
      </div>

      <div>
        <p data-testid="propMessage">{message}</p>
      </div>
    </div>
  )
}

OldApp.propTypes = {
  message: PropTypes.string,
}

OldApp.defaultProps = {
  message: "default message",
}

export default OldApp
