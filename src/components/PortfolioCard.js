import React from 'react'

function PortfolioCard() {
  return (
    <div class="container">
      <div class="box">
        <div class="imgBx">
          <img src="/images/call.svg" />
        </div>
        <div class="content">
          <div class="icon">
            <img src="/images/call.svg" />
          </div>
          <h3>Phone No.</h3>
          <h4>+1 324 565 5649</h4>
          <h4>+1 758 209 7832</h4>
        </div>
      </div>
      <div class="box">
        <div class="imgBx">
          <img src="/images/open-email.svg" />
        </div>
        <div class="content">
          <div class="icon">
            <img src="/images/open-email.svg" />
          </div>
          <h3>Emails</h3>
          <h4>support@gmail.com</h4>
          <h4>care@gmail.com</h4>
        </div>
      </div>
      <div class="box">
        <div class="imgBx">
          <img src="/images/map.svg" />
        </div>
        <div class="content">
          <div class="icon">
            <img src="/images/map.svg" />
          </div>
          <h3>Address</h3>
          <h4>34922 Hall Valley Drive, Highland Park, IL</h4>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
