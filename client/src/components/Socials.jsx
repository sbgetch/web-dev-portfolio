import { Linkedin, Gitlab, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Socials = () => {
  return (
    <div className="flex-1 flex justify-end items-center gap-1">
      <Button
        size="icon"
        variant="ghost"
        className="btnSocials w-7 h-7 sm:w-10 sm:h-10 md:scale-125 md:mx-4"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/steven-gatchalian-7b2798175/",
            "_blank"
          )
        }
      >
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="btnSocials w-7 h-7 sm:w-10 sm:h-10 md:scale-125 md:mx-4"
        onClick={() => window.open("https://gitlab.com/sbgetch", "_blank")}
      >
        <Gitlab className="h-5 w-5" />
        <span className="sr-only">Gitlab</span>
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="btnSocials w-7 h-7 sm:w-10 sm:h-10 md:scale-125 md:mx-4"
        onClick={() => window.open("https://github.com/sbgetch", "_blank")}
      >
        <Github className="h-5 w-5" />
        <span className="sr-only">GitHub</span>
      </Button>
    </div>
  );
};

export default Socials;
