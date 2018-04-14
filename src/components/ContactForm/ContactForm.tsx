import * as React from "react";
import injectSheet from "react-jss";
import Button from "material-ui/Button";
import { navigateTo } from "gatsby-link";
// import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {Theme} from 'material-ui';

function encode(data: any) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const styles = (theme: Theme) => ({
  submit: {
    margin: "3em 0"
    //width: "100%"
  },
  multilineInput: {
    lineHeight: 1.4,
    fontSize: "1.2em"
  },
  singleLineInput: {
    lineHeight: 1.4,
    fontSize: "1.2em",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      width: "47%",
      marginLeft: "3%",
      "&:first-child": {
        marginRight: "3%",
        marginLeft: 0
      }
    }
  },
  submitError: {
    background: "red",
    color: "white"
  }
});

class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
  state = {
    name: "",
    email: "",
    message: "",
    submitError: ""
  };
  form: any;
  handleChange(event: any) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleNetworkError() {
    this.setState({ submitError: "There was a network error." });
  }

  handleSubmit(e: any) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        console.log("Form submission success");
        navigateTo("/success");
      })
      .catch(error => {
        console.error("Form submission error:", error);
        this.handleNetworkError();
      });

    e.preventDefault();
  }

  render() {
    const { classes } = this.props;
    const { email, name, message, submitError } = this.state;
    return (<div>nothing</div>);
    // return (
    //   <ValidatorForm
    //     onSubmit={(ev: any) => this.handleSubmit(ev)}
    //     onError={(errors: any) => console.log(errors)}
    //     name="contact"
    //     ref={(f: any) => (this.form = f)}
    //     data-netlify="true"
    //     data-netlify-honeypot="bot-field"
    //   >
    //     {submitError && <p className={classes.submitError}>{submitError}</p>}
    //     <TextValidator
    //       id="name"
    //       name="name"
    //       label="Name"
    //       value={name}
    //       onChange={(ev: any) => this.handleChange(ev)}
    //       validators={["required"]}
    //       errorMessages={["this field is required"]}
    //       fullWidth
    //       margin="normal"
    //       className={classes.singleLineInput}
    //     />
    //     <TextValidator
    //       id="email"
    //       name="email"
    //       label="E-mail"
    //       value={email}
    //       onChange={(ev: any) => this.handleChange(ev)}
    //       validators={["required", "isEmail"]}
    //       errorMessages={["this field is required", "email is not valid"]}
    //       fullWidth
    //       margin="normal"
    //       className={classes.singleLineInput}
    //     />
    //     <TextValidator
    //       id="message"
    //       name="message"
    //       label="Message"
    //       value={message}
    //       onChange={(ev: any) => this.handleChange(ev)}
    //       validators={["required"]}
    //       errorMessages={["this field is required"]}
    //       multiline
    //       fullWidth
    //       margin="normal"
    //       className={classes.multilineInput}
    //     />
    //     <input name="bot-field" style={{ display: "none" }} />
    //     <Button
    //       variant="raised"
    //       color="primary"
    //       size="large"
    //       type="submit"
    //       className={classes.submit}
    //     >
    //       Send
    //     </Button>
    //   </ValidatorForm>
    // );
  }
}

interface ContactFormProps {
    classes: any;
}

interface ContactFormState {
    name: string;
    email: string;
    message: string;
    submitError: string;
}

export default injectSheet(styles)(ContactForm);
