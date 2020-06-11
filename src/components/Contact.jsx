import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading mb-5 text-uppercase">Let's Talk</h2>
          </div>
          <form
            id="contactForm"
            name="sentMessage"
            onSubmit={this.submitForm}
            action="https://formspree.io/xdowzgaa"
            method="POST"
          >
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Your Name *"
                    required="required"
                    data-validation-required-message="Please enter your name."
                  />
                  {/* <p className="help-block text-danger"></p> */}
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    required="required"
                    data-validation-required-message="Please enter your email address."
                  />
                  {/* <p className="help-block text-danger"></p> */}
                </div>
                <div className="form-group mb-md-0">
                  <input
                    className="form-control"
                    name="phone"
                    id="phone"
                    type="tel"
                    placeholder="Your Phone"
                    data-validation-required-message="Please enter your phone number."
                  />
                  {/* <p className="help-block text-danger"></p> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    placeholder="Your Message *"
                    required="required"
                    data-validation-required-message="Please enter a message."
                  ></textarea>
                  {/* <p className="help-block text-danger"></p> */}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div id="success"></div>
              {status === "SUCCESS" ? (
                <p className="text-white">
                  Thank your for your message. I will get back to you soon.
                </p>
              ) : (
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  id="sendMessageButton"
                  type="submit"
                >
                  Send Message
                </button>
              )}
              {status === "ERROR" && (
                <React.Fragment>
                  <p className="text-white">
                    Ooops! Sorry, there was an error.
                  </p>
                  <p className="text-white">
                    You can send me an email to mdelafuente18@gmail.com.
                  </p>
                </React.Fragment>
              )}
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;