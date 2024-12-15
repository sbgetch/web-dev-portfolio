import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <section className="bg-[url(/header_background.png)] bg-cover text-center text-white px-6 py-4 mx-4 mt-4 rounded-xl flex flex-col items-center justify-center h-80 gap-4 md:gap-8 md:h-screen lg:mx-20">
      <div className="text-4xl font-bold font-archivo-black [text-shadow:_2px_2px_0_rgb(30_65_255_/_40%),_0_5px_8px_rgb(30_65_255_/_40%)] md:text-6xl lg:text-9xl">
        <h1>Steven Gatchalian</h1>
      </div>
      <div className="italic text-lg font-serif md:text-xl lg:text-3xl">
        <p>Empowering Your Digital Presence from Frontend to Backend</p>
      </div>
      <a
        href="/StevenGatchalian_FullStackDev_MERN_2024.pdf"
        download="StevenGatchalian_FullStackDev_MERN_2024.pdf"
      >
        <Button
          variant="ghost"
          className="bg-[#6ccbc2] px-6 py-3 font-bold rounded-br-3xl rounded-tl-3xl md:text-lg md:py-6 lg:text-2xl lg:py-8"
        >
          Download Resume
        </Button>
      </a>
    </section>
  );
};

export default Header;
