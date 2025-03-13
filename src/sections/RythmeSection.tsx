import Accordion from "../common/Accordion";
import Image from "../assets/hero.png";
import Joging from "../assets/joging.png";
import Rejoindre from "../assets/rejoindre.png";
import ButtonLink from "../common/ButtonLink.tsx";

export default function RythmeSection() {
  const itemsRythmeSection = [
    {
      title: "Le Jogging",
      description:
        "Prenez votre courage à deux pieds et challengez-vous seul.e ou à plusieurs dans des parcours immersifs et personnalisés !",
      showCheckbox: true,
    },
    {
      title: "La Marche à pied",
      description: "gjjkhkjhkhkjhkjjhk",
      showCheckbox: true,
    },
  ];

  const itemsObjectifs = [
    {
      title: "Garder la forme",
      description:
        "Nous vous aidons à faire le nécéssaire afin de préserver votre santé dans le temps, tout en prenant du plaisir !",
      showCheckbox: true,
    },
    {
      title: "Perdre du poid",
      description: "gjjkhkjhkhkjhkjjhk",
      showCheckbox: true,
    },
    {
      title: "Se tonifier",
      description: "gjjkhkjhkhkjhkjjhk",
      showCheckbox: true,
    },
  ];

  return (
    <section id="fonctionnalites" className="max-w-7xl m-16 flex flex-col">
    <div id="rythmeSection" className="max-w-7xl px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
      {/* Image à gauche */}
      <div className="w-full lg:w-1/2 h-fit flex justify-center">
        <img
          className="max-w-md w-full h-auto object-cover shadow-lg"
          src={Joging}
          alt="des personnes qui courent"
        />
      </div>

      {/* Accordéon à droite */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-8 sm:space-y-12">
        <h2 className="text-3xl font-semibold text-[#3643BA] text-center md:text-left">À votre rythme !</h2>
        <div className="flex-1"> {/* Permet de pousser le bouton vers le bas */}
          <Accordion items={itemsRythmeSection}/>
        </div>
        <div className=" flex justify-center md:justify-start">
          <ButtonLink
            href="#"
            target="_blank"
            children={"Découvrir nos programmes"}
            className="w-max border-2 border-gray-300 bg-gray-200 text-[#3643BA] hover:text-white px-6 py-3 rounded-[4px] hover:bg-gray-900 active:bg-gray-600"
          />
        </div>

      </div>
    </div>


      <div id="rejoindre" className="max-w-7xl px-6 py-12 flex flex-col-reverse lg:flex-row items-center gap-12">


        <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-8 sm:space-y-">
          <h2 className="text-3xl font-semibold text-center text-[#3643BA] md:text-left">Plus on est de fous...</h2>
          <p className="m-auto text-center max-w-lg text-[#000000] md:m-0 md:text-left">
            En plus de réaliser vos sorties seul.e, vous pouvez ajouter vos amis et créer des sessions communes !
            Il y a également la possibilité de rencontrer d’autres sportifs, créer des défis et des objectifs ! A vos marques...
          </p>
          <div className="space-y-4 mb-6 sm:mb-8  flex justify-center md:justify-start">
            <ButtonLink
              href="#"
              target="_blank"
              children={"Découvrir l’app"}
              className="w-max border-2 my-4 border-gray-300 bg-gray-200 text-[#3643BA] hover:text-white px-6 py-3 rounded-[4px] hover:bg-gray-900 active:bg-gray-600"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-fit flex justify-center">
          <img
            className="max-w-md w-full h-auto object-cover shadow-lg"
            src={Rejoindre}
            alt="des personnes qui courent"
          />
        </div>
      </div>



      <div id="objectifs" className="max-w-7xl px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Image à gauche */}
        <div className="w-full lg:w-1/2 h-fit flex justify-center">
          <img
            className="max-w-md w-full h-auto object-cover shadow-lg"
            src={Image}
            alt="des personnes qui courent"
          />
        </div>

        {/* Accordéon à droite */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-8 sm:space-y-12">
          <h2 className="text-3xl font-semibold text-[#3643BA]  md:text-left text-center">Gérez vos objectifs</h2>
          <div className="flex-1"> {/* Permet de pousser le bouton vers le bas */}
            <Accordion items={itemsObjectifs}/>
          </div>
        </div>
      </div>

    </section>
  );
}
