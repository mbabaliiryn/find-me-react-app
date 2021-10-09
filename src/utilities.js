
  
  const getLocation = async () => {
      let location = false;
    if (navigator.geolocation) {
         location = await navigator.geolocation.getCurrentPosition();
         return location;
      }
}