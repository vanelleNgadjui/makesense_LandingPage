import { Disclosure } from "@headlessui/react";
import Makesense from "../assets/logos/logo_makesense.svg";
import ButtonLink from "../common/ButtonLink";

function Nav() {
  return (
    <Disclosure as="nav">
        <>
          <div className="flex h-[15vh] max-w-7xl items-center justify-between px-8 lg:px-12 xl:m-auto">
            <div className="flex">
              <ButtonLink
                href="#"
                children={<img src={Makesense} alt="Makesense logo" />}
              />
            </div>
            <ButtonLink
              href="https://play.google.com"
              target="_blank"
              children={"Télécharger l’app"}
              className="active:bg hidden  bg-[#3643BA] px-5 py-3 text-white hover:bg-gray-900 active:bg-gray-600 sm:flex"
            />

          </div>
        </>

    </Disclosure>
  );
}

export default Nav;
