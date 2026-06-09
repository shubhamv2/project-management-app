import AppRouter from "./app/router/AppRouter"
import { Toaster } from "react-hot-toast";
import CardDetailsModal from "./features/cards/components/CardDetailsModal";
import CreateBoardModal from "./features/board/components/CreateBoardModal";
const App = () =>{
  return(
    <>
      <AppRouter/>
      <CardDetailsModal/>
      <CreateBoardModal/>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App;