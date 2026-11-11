import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <WhatsAppButton />
    </>
  );
}