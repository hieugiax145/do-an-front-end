// LangToggle.jsx
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const lng = (i18n.resolvedLanguage || "en").split("-")[0];
  const isVI = lng === "vi";

  const toggle = () => i18n.changeLanguage(isVI ? "en" : "vi");

  return (
    <div
      onClick={toggle}
      className="relative inline-flex items-center w-[64px]
      h-[32px] rounded-full select-none  p-2 cursor-pointer"
      // Neumorphic track like the image
      style={{
        // background: isVI ? "#222831" : "#EEF1F5",
        background: "#EEF1F5",
        border:"none",
        // boxShadow: isVI
        //   ? "inset 4px 4px 10px rgba(0,0,0,.45), inset -6px -6px 12px rgba(255,255,255,.08)"
        //   : "8px 8px 16px #cfd5df, -8px -8px 16px #ffffff",
        transition: "background .25s ease, box-shadow .25s ease",
      }}
    >
      {/* Labels */}
      <span
        className={`flex-1 text-sm font-semibold tracking-wide
            transition-colors `}
      >
        en
      </span>
      <span
        className={`text-sm font-semibold tracking-wide
             transition-colors `}
      >
        vi
      </span>

      {/* Knob with flag */}
      <span
        className="absolute  w-[28px] h-[28px] rounded-full bg-white"
        style={{
          left: isVI ? 2 : "auto", // PAD=4px, KNOB=28px
          right: isVI ? "auto" : 2,
          boxShadow:
            "0 10px 18px rgba(0,0,0,.20), inset 6px 6px 12px rgba(0,0,0,.05), inset -6px -6px 12px rgba(255,255,255,.9)",
          transition: "left 240ms ease, box-shadow 240ms ease",
        }}
      >
        <span className="flex items-center justify-center w-full h-full text-2xl leading-none">
          {/* {isVI ? "🇻🇳" : "🇬🇧"} */}
          <img src={isVI ? "./assets/images/vn_flag.svg" : "../assets/images/gb_flag.svg"} alt="" className="w-7 h-7 rounded-full" />
        </span>
      </span>
    </div>
  );
}
