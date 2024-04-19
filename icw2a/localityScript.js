var reverseGeocoder = new BDCReverseGeocode();
reverseGeocoder.getClientLocation(function (result) {
    console.log(result);
    document.getElementById("loc").innerHTML = result.city + ", " + result.principalSubdivision + ", " + result.countryName;

});

reverseGeocoder.getClientCoordinates(function (result) {
    console.log(result);
});
