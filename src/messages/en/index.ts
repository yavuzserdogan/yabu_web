import navigation from "./navigation.json";
import footer from "./footer.json";
import metadata from "./metadata.json";
import home from "./home.json";
import about from "./about.json";
import contact from "./contact.json";
import projects from "./projects.json";
import ads from "./services/ads.json";
import booking from "./services/booking.json";
import boutique from "./services/boutique.json";
import branding from "./services/branding.json";
import corporateMail from "./services/corporate-mail.json";
import corporateWeb from "./services/corporate-web.json";
import eCommerce from "./services/e-commerce.json";
import landing from "./services/landing.json";
import maintenance from "./services/maintenance.json";
import mobileApp from "./services/mobile-app.json";
import portfolio from "./services/portfolio.json";
import qrMenu from "./services/qr-menu.json";
import security from "./services/security.json";
import seo from "./services/seo.json";
import socialMedia from "./services/social-media.json";
import uiux from "./services/ui-ux.json";

const messages = {
  ...navigation,
  ...footer,
  ...metadata,
  ...home,
  ...about,
  ...contact,
  ...projects,
  ServicesPage: {
    "ads": ads,
    "booking": booking,
    "boutique": boutique,
    "branding": branding,
    "corporate-mail": corporateMail,
    "corporate-web": corporateWeb,
    "e-commerce": eCommerce,
    "landing": landing,
    "maintenance": maintenance,
    "mobile-app": mobileApp,
    "portfolio": portfolio,
    "qr-menu": qrMenu,
    "security": security,
    "seo": seo,
    "social-media": socialMedia,
    "ui-ux": uiux,
  },
};

export default messages;