import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Doowload from "../assets/download.png";

function Download() {
  return (
    <section
      id="download"
      className="flex max-w-7xl flex-col items-center justify-between px-20 lg:m-auto lg:flex-row lg:px-12 bg-[#E9E9E9] "
    >
      {/* Texte et boutons */}
      <div className="flex flex-col items-center justify-center text-center sm:w-full md:w-4/6 lg:items-start lg:text-left ">

        <div className="md:pl-20 " >
          <div>
          <h2 className="mb-4 max-w-[16ch] text-4xl font-semibold text-[#000000]">
          À vos chaussures !
        </h2>
        <p className="max-w-lg text-[#000000]">
          L’application est déjà disponible PARTOUT, alors n’hésitez plus !
          On y va !
        </p>
          </div>
          <div>
        {/* Télécharger l’app (proche des boutons) */}
        <p className=" mt-8 mb-2 text-[#000000]">
          Télécharger l’app
        </p>
        {/* Boutons Store */}
        <StoreLinks type={BtnTypes.Standard} />
          </div>
      </div>
    </div>

      {/* Image (en bas sur mobile) */}
      <div className="mt-8 flex w-full h-full items-end justify-center md:mt-0 md:w-2/6">
        <img
          className="w-72 xl:w-80 h-full"
          src={Doowload}
          alt="Make5ense app frame"
        />
      </div>
    </section>
  );
}

export default Download;
