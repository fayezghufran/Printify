const TalkToSale = () => {
  return (
    <section className="bg-emerald-400 py-10 text-white rounded-xl shadow-lg my-12 mx-4 lg:mx-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center max-w-4xl px-4">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 lg:mb-0 text-center lg:text-left">
          Are you a large business looking for custom solutions?
        </h2>
        <button className="bg-white text-emerald-400 py-2 px-6 rounded-md shadow transition-all duration-300 hover:bg-gray-100 w-full lg:w-auto">
          Talk to Sales
        </button>
      </div>
    </section>
  );
};

export default TalkToSale;
