import navigation from "./navigation.json";
import footer from "./footer.json";
import metadata from "./metadata.json";
import home from "./home.json";
import about from "./about.json";
import contact from "./contact.json";
import projects from "./projects.json";
import eCommerce from "./services/e-commerce.json";

const messages = {
  ...navigation,
  ...footer,
  ...metadata,
  ...home,
  ...about,
  ...contact,
  ...projects,
  ServicesPage: {
    "e-commerce": eCommerce,
  },
};

export default messages;