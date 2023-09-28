import { defineStore } from 'pinia'
import { supabase } from '../supabase';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user) {
      this.user = user
    },
    async signIn(email, password) {
        console.log(supabase.auth)
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      this.setUser(user)
    },
    async signOut() {
      await supabase.auth.signOut()
      this.setUser(null)
    },
  },
})
