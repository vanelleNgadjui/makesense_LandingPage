import Phone from "../assets/Mobile.png";
import ButtonLink from "../common/ButtonLink.tsx";

function Hero(){
  const textLinkClasse =
    " active:bg hidden px-5 py-3  rounded-[4px] hover:bg-gray-900 active:bg-gray-600 sm:flex";
const navLinks = [
    { href: "#footer", children: "Découvrir l’app", className: "bg-[#3643BA] text-white" },
    { href: "#features", children: "En savoir plus", className: "border-2 border-gray-300  bg-gray-200 text-[#3643BA] hover:text-white" },
  ];
  return (
    <section className="relative mt-4 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 sm:gap-16  md:my-0 md:h-[84.9vh] md:flex-row md:gap-8 lg:px-12 xl:m-auto">
      <div className="sm:w-full md:w-4/6">
        <h1 className="mx-auto mb-8 max-w-lg text-center text-4xl font-semibold text-[#3643BA] sm:text-5xl md:mx-0 md:text-left">
          Et si chaque pas était une nouvelle aventure sensorielle ?
        </h1>
        <p className="m-auto text-center max-w-lg text-[#000000] md:m-0 md:text-left">
          Grâce à Make5ens, transformez donnez du sens à votre effort sportif grâce à vos cinq sens. Ne faites plus du sport “pour faire du sport”. Chaque moment devient une invitation à observer, écouter, respirer, toucher et savourer votre environnement, à votre rythme.        </p>
        <div className="my-4 flex gap-8">
          {navLinks.map((link, index) => (
          <ButtonLink
            key={index}
            href={link.href}
            children={link.children}
            className={`${textLinkClasse} ${link.className}`}
             />
        ))}
        </div>

      </div>
      <div className="md:w-2/6 flex items-center justify-center">
        <img
          className="w-72 h-auto max-h-[84.9vh] xl:w-80"
          src={Phone}
          alt="Make5ense app frame"
        />
      </div>


    </section>
  );
}

export default Hero;
