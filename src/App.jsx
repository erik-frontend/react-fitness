import { Routes, Route, useNavigate } from "react-router-dom"
import { HomePage, Programs, Trainers, Membership } from "./pages"
import { Layout } from "./components/layout/Layout"
import "./styles/main.scss"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<HomePage />} index />
        <Route path="programs" element={<Programs />}  />
        <Route path="trainers" element={<Trainers />}  />
        <Route path="merbership" element={<Membership />}  />
      </Route>
    </Routes>
  )
}

export default App
