import AppRouter from "./app/router/AppRouter"
import { Toaster } from "react-hot-toast";
import CardDetailsModal from "./features/cards/components/CardDetailsModal";
import CreateBoardModal from "./features/board/components/CreateBoardModal";
import CreateListModal from './features/lists/components/CreateListModal';
import CreateCardModal from "./features/cards/components/CreateCardModal";

const App = () =>{
  return(
    <>
      <AppRouter/>
      <CardDetailsModal/>
      <CreateBoardModal/>
      <CreateListModal/>
      <CreateCardModal/>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App;