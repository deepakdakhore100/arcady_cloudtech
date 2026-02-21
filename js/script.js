var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  
  fetch("https://apex.oracle.com/pls/apex/bankor_accounts/customer/info?c_name=ttttt&c_phone=22222&c_email=t@g.com", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));