import { useState } from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Porque from "../components/Porque";
import Servicios from "../components/Servicios";
import CardsGroup from "../components/CardsGroup";
import { Header } from "../components/Header";
import Como from "../components/Como";
import ToTop from "../components/ToTop";
import Equipo from "../components/Equipo";
import Contacto from "../components/Contacto";

function Index() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Porque />
      <Servicios />
      <CardsGroup />
      <Como />
      <Equipo />
      <Contacto />
      <ToTop />
      <div className="h-[46px] md:hidden"></div>
    </Layout>
  );
}

export default Index;
