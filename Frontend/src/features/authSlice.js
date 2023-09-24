import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: { token: null },
  reducers: {
    setSignIn(state, { payload }) {
      state.token = payload.dataUser.body?.token;
      state.dataUser = payload.dataUser; // Stockez les données de l'utilisateur lors de la connexion
    },

    setLogout: (state) => {
      state.token = null;
      state.dataUser = null; // Réinitialisez également les données de l'utilisateur lors de la déconnexion
    },
  },
});

export const { setSignIn } = authSlice.actions;
export const { setLogout } = authSlice.actions;
export default authSlice.reducer;
