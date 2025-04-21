import { computed } from "vue";
import store from "@/store";
import axios from "axios";
import { useRouter } from "vue-router";


export default function useAuth() {
const user = computed(() => store.state.user);
const isAuthenticated = computed(() => store.state.isAuthenticated);
const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/customer/logout");
    } catch (error) {
      console.log("Ignore error during logout:", error);
    } finally {
        store.dispatch("logout");
        router.push('/login')
    }
  };

  return {
    user,
    isAuthenticated,
    handleLogout,
  };
}
