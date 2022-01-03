export const MemberController = {
  googleAuth: () => {
    return "/auth/google";
  },
  googleLogout: () => {
    return "/auth/google/logout";
  },
  refresh: () => {
    return "/token/refresh";
  },
};

export const PostController = {
  pull: (id: string) => {
    return `/organization/participate/${id}`;
  },
  recruitment: () => {
    return "/post/recruitment";
  },
  recruitmentRef: (id: string) => {
    return `/post/recruitment/${id}`;
  },
  updateRecruitment: (id: string) => {
    return `/post/recruitment/update/${id}`;
  },
  deleteRecruitment: (id: string) => {
    return `/post/recruitment/delete/${id}`;
  },
};
