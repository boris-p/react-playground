import React from 'react'

const ToggleContext = React.createContext({ val1: 'light', val2: 'dark' })

class ContextComp extends React.Component {
  render() {
    return (
      <ToggleContext.Provider value={{ val1: 'light', val2: 'dark' }}>
        <Elm1 />
      </ToggleContext.Provider>
    )
  }
}

export default ContextComp

function Elm1(props) {
  return (
    <div>
      <InnerElm />
    </div>
  )
}
function InnerElm(props) {
  return (
    <div>
      test
      <ToggleContext.Consumer>{theme => <div>{JSON.stringify(theme)}</div>}</ToggleContext.Consumer>
    </div>
  )
}
