import { useState } from "react";
import styles from "./ContactStyles.module.css";
import { ReactComponent as PhoneIcon } from "../../assets/phone.svg";
import { ReactComponent as EmailIcon } from "../../assets/mail.svg";

function Contact() {
  const [copied, setCopied] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(""), 1500);
    });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact Me</h1>

      <ul className={styles.contactRow}>
        <li>
          <button
            className={styles.copyBtn}
            onClick={() => handleCopy("dylanpatrascu1@gmail.com")}
          >
            <EmailIcon className={styles.icon} />
            <span>dylanpatrascu1@gmail.com</span>
          </button>
          {copied === "dylanpatrascu1@gmail.com" && (
            <span className={styles.copied}>Copied!</span>
          )}
        </li>
        <li>
          <button
            className={styles.copyBtn}
            onClick={() => handleCopy("(647) 382-3647")}
          >
            <PhoneIcon className={styles.icon} />
            <span>(647) 382-3647</span>
          </button>
          {copied === "(647) 382-3647" && (
            <span className={styles.copied}>Copied!</span>
          )}
        </li>
      </ul>

      <form action="https://formspree.io/f/meoaqkqq" method="post">
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input type="text" name="email" id="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
