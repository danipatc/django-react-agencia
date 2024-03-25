import Error404 from "containers/errors/Error404"
import Home from "containers/pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import store from "./store"
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      
    </Provider>
  )
}

export default App