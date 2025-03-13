import Makesense from "../assets/logos/logo_makesense.svg";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Instagram from "../assets/logos/icons8-instagram.svg";
import Facebook from "../assets/logos/icons8-facebook.svg";

function Footer() {
  return (
    <section id="footer" className="bg-white">
      <div className="flex max-w-7xl flex-col px-8 py-12 text-[#000000] lg:px-12 xl:m-auto">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">

          <div className=" flex flex-col gap-10">
          <div>
            <img
              className="mb-4 w-36"
              src={Makesense}
              alt="Light version of Kobodrop logo"
            />
            <p>          Et si chaque pas était une nouvelle aventure sensorielle ?
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <a href="https://www.instagram.com/make5ense_by_decathlon/" target="_blank">
              <img src={Instagram} alt="Instagram logo" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573892529275&locale=fr_FR" target="_blank">
              <img src={Facebook} alt="Facebook logo" />
            </a>
          </div>
          </div>
            <div className="w-fit  flex flex-col">
              <h2>Télécharger l’app</h2>
              <StoreLinks type={BtnTypes.Standard} />

          </div>

        </div>
        <div className="mt-14 flex justify-between pt-10">
          <p className="w-[16ch] text-[#000000] md:w-full">
            &copy; 2025 Makesense. Tous droits reservés.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
