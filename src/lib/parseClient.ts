import Parse from "parse";

Parse.initialize(
  import.meta.env.VITE_APPLICATION_ID,
  import.meta.env.VITE_JAVASCRIPT_KEY
);

Parse.serverURL = "https://parseapi.back4app.com/";

export default Parse;
