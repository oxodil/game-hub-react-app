import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "5381371887c64c1b933fb8cc50638590",
  },
});
