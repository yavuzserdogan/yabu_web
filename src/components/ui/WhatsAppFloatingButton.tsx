"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type WhatsAppFloatingButtonProps = {
  phoneNumber?: string;
  message?: string;
};

const DEFAULT_PHONE_NUMBER = "905376212817";
const DEFAULT_MESSAGE = "Merhaba, Sybor Digital hizmetleri hakkında bilgi almak istiyorum.";

export function WhatsAppFloatingButton({
  phoneNumber = DEFAULT_PHONE_NUMBER,
  message = DEFAULT_MESSAGE,
}: WhatsAppFloatingButtonProps) {
  const pathname = usePathname();
  const cleanPathname = pathname.replace(/^\/[a-zA-Z]{2}(\/|$)/, '/').replace(/\/$/, '') || '/';
  const allowedPaths = ["/", "/contact", "/services", "/projects", "/about", "contact"];

  if (!allowedPaths.includes(cleanPathname)) return null;

  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <AnimatePresence>
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center justify-center">

        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" style={{ animationDuration: '2.5s' }} />

        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl w-14 h-14 md:w-16 md:h-16 cursor-pointer group hover:bg-[#128C7E] transition-colors"
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="WhatsApp ile mesaj gönder"
        >
          <span className="absolute inset-0 rounded-full bg-white/10 blur-md" />
          <svg
            viewBox="0 0 32 32"
            className="relative w-8 h-8 md:w-9 md:h-9 z-10"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.002 0C7.177 0 .015 7.163.015 15.987c0 2.822.738 5.572 2.14 8L.002 32l8.193-2.147a15.89 15.89 0 007.807 2.036h.006c8.822 0 15.984-7.163 15.984-15.99C31.992 7.153 24.825 0 16.002 0zm0 29.215h-.005a13.203 13.203 0 01-6.733-1.838l-.482-.286-5.008 1.313 1.336-4.883-.314-.5A13.228 13.228 0 012.67 15.987c0-7.348 5.98-13.328 13.334-13.328 3.56 0 6.906 1.388 9.424 3.905a13.251 13.251 0 013.902 9.427c-.001 7.35-5.983 13.331-13.334 13.331zm7.323-10.012c-.401-.2-2.378-1.173-2.746-1.307-.367-.134-.635-.2-.903.2-.268.401-1.037 1.307-1.271 1.574-.234.268-.468.301-.87.101-2.247-1.118-3.743-2.006-5.197-4.468-.202-.341-.023-.523.177-.724.181-.18.401-.468.602-.702.2-.234.268-.401.401-.669.134-.268.067-.502-.033-.702-.101-.201-.903-2.175-1.237-2.978-.326-.783-.656-.677-.903-.689-.234-.012-.502-.012-.77-.012-.268 0-.702.101-1.07.502-.368.401-1.405 1.372-1.405 3.346 0 1.974 1.438 3.882 1.639 4.149.201.268 2.825 4.312 6.843 6.046 2.748 1.185 3.702 1.037 5.074.803 1.096-.187 3.311-1.355 3.779-2.66.468-1.305.468-2.422.334-2.66-.134-.233-.502-.367-.903-.568z" />
          </svg>

          <span className="hidden md:block absolute right-full mr-4 bg-gray-900/90 text-white text-sm font-medium px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none">
            Bize Ulaşın
          </span>
        </motion.a>
      </div>
    </AnimatePresence>
  );
}