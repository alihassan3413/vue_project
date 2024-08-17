import { defineStore } from "pinia";
import axios from "@/plugins/axios";
import type { APIResponse, loginData, User } from "@/types";

export const useAuthStore = defineStore("AuthStore", {
  state: () => ({
    user: {} as User,
  }),
  actions: {
    async registerUser(form: Record<string, string>) {
      return new Promise<User>(async (resolve, reject) => {
        try {
          const { data } = await axios.post<APIResponse<{ user: User }>>(
            "/users/register",
            {
              ...form,
            }
          );
          console.log("Register", data);

          resolve(data.data.user);
        } catch (error) {
          reject(error);
        }
      });
    },

    async loginUser(form: Record<string, string>) {
      return new Promise<User>(async (resolve, reject) => {
        try {
          const { data } = await axios.post<APIResponse<loginData>>(
            "/users/login",
            {
              ...form,
            }
          );
          this.user = data.data.user;
          console.log("Login", data);
          localStorage.setItem("userContent", JSON.stringify(data.data.user));
          localStorage.setItem(
            "currentAuthTokens",
            JSON.stringify({
              accessToken: data.data.accessToken,
              refreshToken: data.data.refreshToken,
            })
          );
          resolve(data.data.user);
        } catch (error) {
          reject(error);
        }
      });
    },
  },
});
