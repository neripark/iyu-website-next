import { SiteFooter } from "@/components/SiteFooter";
import { Contact } from "./Contact";
import { Gallery } from "./Gallery";
import { Goods } from "./Goods";
import { Live } from "./Live";
import { MainVisual } from "./MainVisual";
import { MusicVideo } from "./MusicVideo";
import { Profile } from "./Profile";
import { SiteFloatingNavigation } from "./SiteFloatingNavigation";
import { SiteHamburgerNavigation } from "./SiteHamburgerNavigation";

export const Template: React.FC = () => {
  return (
    <main>
      <header>
        <SiteFloatingNavigation />
        <SiteHamburgerNavigation />
      </header>
      <MainVisual />
      <Profile />
      <MusicVideo />
      <Live />
      <Goods />
      <Gallery />
      <Contact />
      <SiteFooter />
    </main>
  );
};
