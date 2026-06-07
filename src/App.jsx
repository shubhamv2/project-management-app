import AppRouter from "./app/router/AppRouter"
import { Toaster } from "react-hot-toast";
const App = () =>{
  return(
    <>
      <AppRouter/>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App;