import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 3r0ptJDp2xuCeLTrJszRLgio0Ip3IpoaO2uXeos9dTVM7seBv-mQwSwNW_XD6VvX7tin84wZnz1A5xbrlP-NdOVDVVGKisuyEYdbhQRFtEbc8EQ2GrJSCJgmCTslXnYx"
  }
});
