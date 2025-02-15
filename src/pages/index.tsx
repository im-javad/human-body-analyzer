import BodyParts from "@/components/bodyParts";
import { bodyParts } from "@/data/bodyParts";

const Home: React.FC = () => {
  return <BodyParts parts={bodyParts} />;
};

export default Home;
