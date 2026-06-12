import AppRouter from "./app/router/AppRouter"
import { Toaster } from "react-hot-toast";
import RootModal from "./features/modal/components/RootModal";

const App = () =>{
  return(
    <>
      <AppRouter/>
      <RootModal/>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App;