import { StyleProvider } from "@ant-design/cssinjs";
import User from "../../routes/user.route";
import Header from "../../components/header/navbar";
import Footer from "../../components/footer";
import Banner from "../../components/banner";

export default function DefaultLayoutUser() {
    return (
      <StyleProvider hashPriority="high">
        <main className="dark:text-gray-200 dark:bg-slate-900 duration-100">
        <Header />
        <User/>
        <Footer />  
        </main>
      </StyleProvider>
    );
  }