import { Live } from "./Live";
import { MainVisual } from "./MainVisual";
import { MusicVideo } from "./MusicVideo";
import { Profile } from "./Profile";

export const Template: React.FC = () => {
  return (
    <main>
      <MainVisual />
      <Profile />
      <MusicVideo />
      <Live />
    </main>
  );
};
