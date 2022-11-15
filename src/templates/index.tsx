import { Contact } from "./Contact";
import { Gallery } from "./Gallery";
import { Live } from "./Live";
import { MainVisual } from "./MainVisual";
import { MusicVideo } from "./MusicVideo";
import { Profile } from "./Profile";
import { SiteFooter } from "@/components/SiteFooter";

export const Template: React.FC = () => {
  return (
    <main>
      <MainVisual />
      <Profile />
      <MusicVideo />
      <Live />
      <Gallery />
      <Contact />
      <SiteFooter />
    </main>
  );
};
