import { BrowserRouter } from "react-router-dom";

import { Toaster } from "sonner";
import { AppLayout } from "./components/layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors position="bottom-right" />
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
