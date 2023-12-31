(function () {
  const address = location.href.replace(/.+\//, '').replace(/\#.+/, '')
  const h1Element = document.querySelector('h1')
  if (h1Element && (h1Element.innerHTML.indexOf('Contract') != -1 || h1Element.innerHTML.indexOf('Token') != -1)) {
    const btnHref = location.href.replace(/\.\w+(\/)/, '.deth.net/')
    h1Element.innerHTML = 
      `<a
        href="${btnHref}"
        target="_blank"
        style="
          font-size: 16px;
          color: #fff;
          background: #000;
          padding: 10px 20px;
          border-radius: 5px;
          margin-right: 5px;
        ">View source code</a>`
      + h1Element.innerHTML
  }
})()