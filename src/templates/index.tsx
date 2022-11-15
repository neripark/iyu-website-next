import { MainVisual } from "./MainVisual";
import { MusicVideo } from "./MusicVideo";
import { Profile } from "./Profile";

export const Template: React.FC = () => {
  return (
    <main>
      <MainVisual />
      <Profile />
      <MusicVideo />
    </main>
  );
};
