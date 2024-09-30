import { Outlet } from "react-router-dom";

import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";
import { useState } from "react";
import { Footer } from "../components/Footer/Footer";
import { FooterLinks } from "../components/Footer/FooterLinks/FooterLinks";

export const MainLayout = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Header setisVisible={setIsVisible}>
        <Navbar isVisible={isVisible}/>
      </Header>
      <Outlet />
      <Footer>
        <FooterLinks header="Adresse:" title="Inten nyt - Godt nyt ApS" linkOne="Tulipanvej 232" linkTwo="7320" linkThree="Valby Øster"/>
        <FooterLinks header="Links" linkOne="vikanweb.dk" linkTwo="overpådenandenside.dk" linkThree="retsinformation.dk" linkFour="nogetmednews.dk"/>
        <FooterLinks header="Politik" linkOne="Privatlivspolitik" linkTwo="Cookiepolitik" linkThree="Købsinformation" linkFour="Delingspolitik"/>
        <FooterLinks header="Kontakt" linkOne="ingn@nyhed.dk" linkTwo="teletfon: 23232323" linkThree="fax: 123123-333"/>
      </Footer>
    </>
  );
};
