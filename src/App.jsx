import { Routes, Route, useNavigate } from "react-router-dom"
import { HomePage, Programs, Trainers, MembershipPages, ContactPage, ProgramPage, PaymentPage, AboutUsPage} from "./pages"
import { Layout } from "./components/layout/Layout"
import "./styles/main.scss"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<HomePage />} index />
        <Route path="programs" element={<Programs />}  />
        <Route path="trainers" element={<Trainers />}  />
        <Route path="merbership" element={<MembershipPages />}  />
        <Route path="contact" element={<ContactPage />}  />
        <Route path="program" element={<ProgramPage />}  />
        <Route path="payment" element={<PaymentPage />}  />
        <Route path="about-us" element={<AboutUsPage />}  />
      </Route>
    </Routes>
  )
}

export default App
