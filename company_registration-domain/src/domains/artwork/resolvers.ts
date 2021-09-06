export const artist_resolvers = {
  Query: {
    getAllPhotos: async (_: any, __: any, context: any) => {
      // const { all_photos } = context;
      try {
      } catch (e) {
        console.log("ERROR ______@@@@@@", e);
      }
    },
    getAllArtist: async (_: any, __: any, context: any) => {
      try {
      } catch (e) {
        console.log("ERROR ______@@@@@@", e);
      }
    },

    getArtistByID: async (parent: any, { user_id }: any, { db }: any) => {
      try {
      } catch (e) {
        console.log("ERROR ______@@@@@@", e);
      }
    },
  },
};
