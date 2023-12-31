(function () {
  const h1Element = document.querySelector('h1')
  if (h1Element && (h1Element.innerHTML.indexOf('Contract') != -1 || h1Element.innerHTML.indexOf('Token') != -1)) {
    let btnHref = location.href.replace(/\.\w+(\/)/, '.deth.net/')
    btnHref = btnHref.replace(/\?.+/, '')
    h1Element.innerHTML = 
      `<a
        href="${btnHref}"
        target="_blank"
        style="
          font-size: 16px;
          color: #fff;
          background: #554de0;
          padding: 10px 20px;
          border-radius: 5px;
          margin-right: 5px;
        ">View Code</a>`
      + h1Element.innerHTML
  }
})()