
  function validateForm() {
    let name = document.forms["customerForm"]["customerName"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    let mail = document.forms["customerForm"]["e-mail"].value;
    if (mail == "") {
      alert("Mail must be filled out");
      return false;
    }
    let phone = document.forms["customerForm"]["phoneNumber"].value;
    if (phone == "") {
      alert("Phonenumber must be filled out");
      return false;
    }
    let street = document.forms["customerForm"]["street"].value;
    if (street == "") {
      alert("Street must be filled out");
      return false;
    }
    let zipcode = document.forms["customerForm"]["zipCode"].value;
    if (zipcode == "") {
      alert("Zip-code must be filled out");
      return false;
    }
    let city = document.forms["customerForm"]["city"].value;
    if (city == "") {
      alert("City must be filled out");
      return false;
    }


  }