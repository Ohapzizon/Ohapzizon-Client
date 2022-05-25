import { MemberController } from "../Util/libs/requestUrls";
import RequestApi from "../Util/libs/requestApi";

class Member {
  googleAuth() {
    try {
      return RequestApi({
        method: "GET",
        url: MemberController.googleAuth(),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  googleLogOut() {
    try {
      return RequestApi({
        method: "DELETE",
        url: MemberController.googleLogout(),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  refresh() {
    try {
      return RequestApi({
        method: "GET",
        url: MemberController.refresh(),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  callback(code: any) {
    const data = {
      data: code,
    };
    try {
      return RequestApi({
        method: "POST",
        url: MemberController.googleAuth(),
        data: data,
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new Member();
