import Feed from "../components/Feed";

export default function Home() {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discaver & Shear
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center"> AI-Powerd Props </span>
        </h1>
        <p className="desc text-center">
          Promptopia is a open-sorce AI prompoting tool for modern world tolse
          discaver, creat and shear creative prompts
        </p>
      </section>


      <Feed />
    </div>
  );
}
