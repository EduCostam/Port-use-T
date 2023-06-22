import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-grow">
        <div>
          <p>Olá, meu nome é</p>
          <h2>Eduardo Marques</h2>

          <div>
            <p>Olá, meu nome é Eduardo, desenvolvedor web</p>

            <div>techs</div>

            <div>contato</div>
          </div>

          <Image
            width={420}
            height={404}
            src="/images/profile-pic.png"
            alt="Foto de perfil do Eduardo Marques"
          />
        </div>
      </div>
    </section>
  );
};
