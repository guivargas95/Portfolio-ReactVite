import MainFooter from "./components/mainFooter"
import MainNavbar from "./components/mainNavbar"
import { AppRoutes } from "./Routes"

function App() {

  return (
    <div>
      <MainNavbar />
      <AppRoutes />
      <MainFooter />
    </div>

  )
}

export default App
