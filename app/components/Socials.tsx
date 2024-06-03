/* eslint-disable @next/next/no-img-element */
import { socials } from "../data/data";

const Socials = () => {
  return (
    <div className="flex gap-[1.2rem] text-sm font-jetbrains justify-center items-center">
      {socials.map((s) => (
        <a
          key={s.name}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-90 transition-all hover:opacity-100"
          href={s.url}
        >
          <span className="flex items-center gap-x-1 px-1 text-xs relative">
            {typeof s.icon === 'string' ? (
              <img src={s.icon} alt={`${s.name} icon`} />
            ) : (
              <img src={s.icon.src} alt={`${s.name} icon`} width={s.icon.width} height={s.icon.height} />
            )}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Socials;
