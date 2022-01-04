import RequestApi from "../Util/libs/requestApi";
import { PostController } from "../Util/libs/requestUrls";

class Post {
  recruitmentAllRef() {
    try {
      return RequestApi({
        method: "GET",
        url: PostController.recruitment(),
      });
    } catch (e) {}
  }
}

export default new Post();
