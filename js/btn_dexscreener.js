(function () {
  let address = location.href.replace(/.+\//, '').replace(/\#.+/, '')
  address = address.replace(/\?.+/, '')
  const h1Element = document.querySelector('h1')
  if (h1Element && h1Element.innerHTML.indexOf('Token') != -1) {
    h1Element.innerHTML = 
      `<a
        href="https://dexscreener.com/search?q=${address}"
        target="_blank"
        style="
          font-size: 16px;
          color: #fff;
          background: #000;
          padding: 10px 20px;
          border-radius: 5px;
          margin-right: 5px;
        ">DEX Screener</a>`
      + h1Element.innerHTML
  }
})()