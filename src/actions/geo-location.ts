export const getUserGeoLocation = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/geo`);
    const geoLocation = await response.json();
    console.log("geoLocation from actions => ", geoLocation);
    return geoLocation;
  } catch (error) {
    return null;
  }
};
