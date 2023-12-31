(function () {
  const address = location.href.replace(/.+\//, '').replace(/\#.+/, '')
  const h1Element = document.querySelector('h1')
  if (h1Element && h1Element.innerHTML.indexOf('Address') != -1) {
    h1Element.innerHTML = 
      `<a
        href="https://debank.com/profile/${address}"
        target="_blank"
        style="
          font-size: 16px;
          color: #fff;
          background: #fe815f;
          padding: 10px 20px;
          border-radius: 5px;
          margin-right: 5px;
        ">DeBank</a>`
      + h1Element.innerHTML
  }
})()