document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("qrForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputURL = document.getElementById("text").value;
    generateQRCode(inputURL);
  });
});

function generateQRCode(url) {
  const qr = qrcode(0, "M");
  qr.addData(url);
  qr.make();
  
  const qrCodeImage = document.createElement("img");
  qrCodeImage.src = qr.createDataURL(10, 0);
  const qrCodeImageContainer = document.getElementById("qrCodeImage");
  qrCodeImageContainer.innerHTML = '';
  qrCodeImageContainer.appendChild(qrCodeImage);

  // Save the URL to a text file
  saveURLToTxtFile(url);
}

function saveURLToTxtFile(url) {
  const txtBlob = new Blob([url], { type: "text/plain" });
  const txtURL = URL.createObjectURL(txtBlob);
  const txtLink = document.createElement("a");
  txtLink.href = txtURL;
  txtLink.download = "URL.txt";
  txtLink.click();
}
