import { computed } from "vue";
import { useRouter } from "vue-router";
import { userStore } from "../stores/user.store.js";

export const useUser = () => {
  const store = userStore();
  const router = useRouter();

  const login = (user) => {
    store.setUser(user);
    router.push({ path: "/home" });
  };

  const getUser = computed(() => {
    return store.getUser;
  });

  

  return { login, getUser };
};
