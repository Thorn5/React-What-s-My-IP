import { TextField } from "@mui/material";

const Search = () => {

  const WMIPAurl = "https://whatismyipaddress.com/?s="

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target[0].value;
    const searchUrl = WMIPAurl + search;
    // create a function to send the user into a new window with the search results
    // use the searchUrl variable above
    console.log(searchUrl);
    window.open(searchUrl, "_blank");
    e.target[0].value = "";
  }


  return (
    <form className="search" onSubmit={handleSubmit}  >
      <TextField id="outlined-basic"
        label="Search in WhatIsIPAddress"
        variant="outlined"
        style={{ marginRight: '1rem', backgroundColor: 'transparent', color: 'white' }} />
    </form>
  );
}

export default Search;