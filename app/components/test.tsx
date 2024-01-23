import SectionTitle from "./section-title";

const Test = () => {
  return (
    <section>
      {/* <div className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Test Section Title"
            paragraph="Test Section Paragraph"
            center
          />
        </div>
      </div> */}
      <h1 className="mt-6">Tailwind Grid:</h1>
      <div className="grid gap-2 text-black md:grid-cols-3  lg:grid-cols-5 ">
        <div className="bg-red-500 lg:col-span-3">A 1,3</div>
        <div className=" bg-green-500 lg:col-span-2">B 1,2</div>
        <div className=" row-span-2 bg-blue-500">C 1,1</div>
        <div className=" bg-pink-500 lg:col-span-2">D 1,2</div>
        <div className=" bg-yellow-500">E 1,1</div>
        <div className=" bg-purple-500">F 1,1</div>
        <div className=" bg-orange-500">G 1,1</div>
        <div className=" bg-amber-500">H 1,1</div>
        <div className=" bg-lime-500">I 1,1</div>
      </div>
    </section>
  );
};

export default Test;
