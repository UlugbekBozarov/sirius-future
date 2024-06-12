import { STORAGE_NAMES } from "constants/Storage.constants";
import { getItemCookie } from "services/storage";

import PrivateRouts from "./private/PrivateRouts";
import PublicRouts from "./public/PublicRouts";

const Router = () => {
  const token = getItemCookie(STORAGE_NAMES.authorization);

  if (token) {
    return <PrivateRouts />;
  } else {
    return <PublicRouts />;
  }
};

export default Router;
