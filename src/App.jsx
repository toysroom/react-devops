import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import UsersPage from "./pages/UsersPage"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <> {/* Fragment */}
      
      <Header />

      <Navbar />
      
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/utenti" element={ <UsersPage /> } />
      </Routes>

      <Footer />
    </>
  )
}

export default App