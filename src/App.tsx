import Hero from "./components/Hero"
import ListingsPage from "./components/ListingsPage";
import ListingDetails from "./components/ListingDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
        {/* <Route path="/listing/:id" element={<ListingDetails />} /> */}
      </Routes>
    </Router>
  )
}

export default App
