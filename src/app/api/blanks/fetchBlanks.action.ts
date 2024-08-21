export async function fetchBlanksAction(
  skip: number,
  take: number,
  search?: string,
  countryId?: string,
  manufacturerId?: string,
  securityLevelId?: string,
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/blanks?skip=${skip}&take=${take}&search=${search}&countryId=${countryId}&manufacturerId=${manufacturerId}&securityLevelId=${securityLevelId}`,
  );

  return res?.json();
}
