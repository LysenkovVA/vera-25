import { createEntityAdapter } from "@reduxjs/toolkit";
import { Country } from "@/entities/Country";

export const CountryListAdapter = createEntityAdapter<Country, string>({
  selectId: (entity) => entity.id,
});
