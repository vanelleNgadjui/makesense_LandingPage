import Image1 from "../assets/icons/eyes.svg";
import Image2 from "../assets/icons/ears.svg";
import Image3 from "../assets/icons/nose.svg";
import Image4 from "../assets/icons/finger.svg";
import Image5 from "../assets/icons/mouth.svg";

function Features() {
  const featuresTop = [
    { image: Image1, title: "La Vue", description: "Observez les alentours afin de repérer les secrsts autour de vous !" },
    { image: Image2, title: "L'Ouïe", description: "Plongez en pleine immersion grâce à des musiques ou des podcasts personalisés !" },
    { image: Image3, title: "L'Odorat", description: "Renouvellez l’air que vous respirez et donnez une chance à vos alentour!" }
  ];

  const featuresBottom = [
    { image: Image4, title: "Le Toucher", description: "Découvez une nouvelle façon d’apprécier votre environnement et le comprendre !" },
    { image: Image5, title: "Le Goût", description: "Retrouvez goût au sport grâce à nos défis et nos produits Make 5ense !" }
  ];

  return (
    <section id="features" className="flex max-w-7xl flex-col gap-10 px-8 pt-10 lg:px-12 xl:m-auto xl:pt-20">
      <article className="m-auto w-[30ch] text-center text-[#000000] md:m-0 md:w-full">
        <h2 className="mb-4 text-4xl font-semibold text-[#000000]">Exploration Sensorielle</h2>
        <p>
          Transformez vos promenades en expériences inoubliables grâce à vos cinq sens.
          <br/>
          Reconnectez-vous à la nature, découvrez de nouvelles sensations et cultivez la pleine conscience.
        </p>
      </article>

      {/* Groupe de 3 en haut */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {featuresTop.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl border-2 border-gray-100">
            <img src={feature.image} alt={feature.title} className="w-32 h-32 mb-4" />
            <h3 className="text-2xl font-semibold text-[#000000]">{feature.title}</h3>
            <p className="text-[#000000]">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Groupe de 2 en bas */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 justify-center">
        {featuresBottom.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl border-2 border-gray-100 justify-center">
            <img src={feature.image} alt={feature.title} className="w-32 h-32 mb-4" />
            <h3 className="text-2xl font-semibold text-[#000000]">{feature.title}</h3>
            <p className="text-[#000000]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
