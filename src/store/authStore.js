import { defineStore } from 'pinia';
import { supabase } from '../supabase'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null
  }),
  actions: {
    setUser(newUser) {
      this.user = newUser;
    },
    async getUUID(username) {
      const { data, error } = await supabase
        .from('username_mapping')
        .select('uid')
        .eq('username', username);

      if (error) {
        console.error("Error fetching UUID:", error);
        return null;
      }

      if (data && data.length > 0) {
        return data[0].uid;
      } else {
        return null;
      }
    },
    async fetchUsernameCurrentUser() {
      const { data, error } = await supabase
        .from('username_mapping')
        .select('username')
        .eq('uid', this.user.id);

      if (error) {
        console.error("Error fetching username:", error);
        return null;
      }
      if (data && data.length > 0) {
        return data[0].username;
      } else {
        return null;
      }
    },
    async fetchUserLinks(uuid) {
      const { data, error } = await supabase
        .from('user_links')
        .select('*')
        .eq('user_id', uuid)
        .order('updated_at', { ascending: false });

      if (error) {
        console.error("Error fetching links:", error);
        return null;
      }
      return data || [];
    },
    async fetchAnonLinks(uuid) {
      const { data, error } = await supabase
        .from('anon_links')
        .select('*')
        .eq('user_id', uuid)
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching links:", error);
        return null;
      }
      return data || [];
    }
  }
});