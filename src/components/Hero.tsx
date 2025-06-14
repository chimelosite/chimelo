import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Hero: React.FC = () => {
  return <section className="relative bg-chimelo-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{
      backgroundImage: 'url("https://i.imgur.com/1FQHSz1.jpeg")',
      backgroundBlendMode: 'overlay'
    }} />
      
      <div className="relative chimelo-container md:py-24 lg:py-32 flex flex-col items-start py-[126px]">
        <div className="-bottom-24 rounded-bl-full ">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Soluções jurídicas inovadoras para sua empresa
          </h1>
          <p className="text-xl text-chimelo-silver mb-8 max-w-2xl">
            Com profissionais com mais de 20 anos de experiência, conduzimos demandas complexas com expertise técnica e inovação, garantindo segurança e eficiência jurídica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="chimelo-btn chimelo-btn-primary">
              <Link to="/areas-de-atuacao">
                Conheça nossos serviços <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/contato">
                Entre em contato
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;