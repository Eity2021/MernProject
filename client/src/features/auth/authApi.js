import { apiSlice } from "../api/apiSlice";
// import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/api/auth/register",
        method: "POST",
        body: data,
      }),

    //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //     try {
    //       const result = await queryFulfilled;
    //       localStorage.setItem(
    //         "auth",
    //         JSON.stringify({
    //           accessToken: result.data.data.access.token,
    //           // user: result.data.data.user,
    //         })
    //       );
    //       console.log("result", result.data.data.access.token);
    //       dispatch(
    //         userLoggedIn({
    //           accessToken: result.data.data.access.token,
    //           // user: result.data.data.user,
    //         })
    //       );
    //     } catch (err) {
    //       //do nothing
    //     }
    //   },
    }),

    // login: builder.mutation({
    //   query: (data) => ({
    //     url: "/auth/login",
    //     method: "POST",
    //     body: data,
    //   }),

    //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //     try {
    //       const result = await queryFulfilled;
    //       localStorage.setItem(
    //         "auth",
    //         JSON.stringify({
    //           accessToken: result.data.data.access.token,
    //           // user: result.data.data.user,
    //         })
    //       );

    //       dispatch(
    //         userLoggedIn({
    //           accessToken: result.data.data.access.token,
    //           // user: result.data.data.user,
    //         })
    //       );
    //     } catch (err) {
    //       //do nothing
    //     }
    //   },
    // }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
