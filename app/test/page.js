//Compare this snippet from src/pages/index.js:
import { getHello } from "../app/api/hello";

export default function Home(props) {
  return (
    <div>
      <h1>{props.message}</h1>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getHello();
  return {
    props: {
      message: data.message,
    },
  };
}
