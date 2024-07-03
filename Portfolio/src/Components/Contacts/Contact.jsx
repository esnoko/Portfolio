/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import contacts from "../../data/contacts.json";

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.content}>
        <div className={styles.contacts}>
          {contacts.map((contact, id) => {
            return (
              <div key={id} className={styles.contact}>
                <div className={styles.contactImageContainer}>
                  <img src={getImageUrl(contact.imageSrc)} alt={contact.title} />
                </div>
                <p>{contact.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
