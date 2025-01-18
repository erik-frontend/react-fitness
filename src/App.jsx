import { Routes, Route, useNavigate } from "react-router-dom"
import { HomePage, Programs } from "./pages"
import { Layout } from "./components/layout/Layout"
import "./styles/main.scss"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<HomePage />} index />
        <Route path="programs" element={<Programs />}  />
      </Route>
    </Routes>
  )
}

export default App
