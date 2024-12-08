import Image from "next/image";
import TopHeader from "./components/TopHeader";
import Middle from "./components/Middle";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Featured from "./components/Featured";import TopCatagory from "./components/TopCatagory";
 "./components/Logo";
export default function Home() {
  return (
    <div>
       <TopHeader/>
      <Middle />
      <Navigation />
      <Header /> 
      <Logo />
      <Featured />
      <TopCatagory />
      
     
     
    </div>
  );
}
