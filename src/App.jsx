import { Routes, Route, useNavigate } from "react-router-dom"
import { HomePage } from "./pages"
import { Layout } from "./components/layout/Layout"



function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<HomePage />} index />
      </Route>
    </Routes>
  )
}

export default App
