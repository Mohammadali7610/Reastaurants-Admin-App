import Header from "../Header/Header";

const ZomatoPartnerPage = () => {
  return (
    <div className="zomatoPartnerPageContainer">
      <div className="partnerSectionContainer">
        <div className="imageContainer">
          <div className="placeholderImage"></div>
          <img
            alt="web-backdrop"
            src="https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp"
            loading="lazy"
            className="backgroundImage"
          />
        </div>
        <div className="dividerLine"></div>
      </div>
      <div className="contentSection">
        <Header/>
        <div className="textContainer">
          <h1 className="partnerTitle">Partner with Zomato</h1>
          <h1 className="discountTitle">at 0% commission for the 1st month!</h1>
          <div className="offerDescription">
            And get ads worth INR 1500. Valid for new restaurant partners in select cities.
          </div>
        </div>
        <section className="actionSection">
          <div className="buttonContainer">
            <div className="registerButtonWrapper">
              <button className="registerButton" role="button" tabIndex="0" aria-disabled="false">
                <span className="buttonText">Register your restaurant</span>
              </button>
            </div>
            <div className="viewButtonWrapper">
              <button className="viewButton" role="button" tabIndex="0" aria-disabled="false">
                <span className="buttonText">View your existing restaurants</span>
              </button>
            </div>
          </div>
          <div className="contactInfo">
            Need help? Please email us at{" "}
            <a href="mailto:merchantonboarding@zomato.com?subject=Need help with restaurant onboarding on Zomato" className="contactEmail">
              merchantonboarding@zomato.com
            </a>
          </div>
          <div className="requirementsSection" style={{ top: "178px" }}>
            <div className="requirementsContent">
              <h1 className="requirementsTitle">Get started with online ordering</h1>
              <h3 className="requirementsSubtitle">Please keep the documents ready for a smooth signup</h3>
              <div className="documentList">
                <div className="documentItem">
                  <span className="icon"></span>
                  <span className="documentText">FSSAI license copy</span>
                </div>
                <div className="documentItem">
                  <span className="icon"></span>
                  <span className="documentText">PAN card copy</span>
                </div>
                <div className="documentItem">
                  <span className="icon"></span>
                  <span className="documentText">Regular GSTIN (if applicable)</span>
                </div>
                <div className="documentItem">
                  <span className="icon"></span>
                  <span className="documentText">Bank account details</span>
                </div>
                <div className="documentItem">
                  <span className="icon"></span>
                  <span className="documentText">Your restaurant menu</span>
                </div>
                <div className="documentItem">
                  <span className="icon"></span>
                  <span className="documentText">Dish images for top 5 items</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ZomatoPartnerPage;
