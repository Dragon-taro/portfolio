import * as React from "react";

import { Props } from "./types";

import * as styles from "./style.css";
import Input from "../../components/parts/Form/Input";
import { ISetContact } from "../../types/contact";
import Select from "../../components/parts/Form/Select";
import Textarea from "../../components/parts/Form/TextArea";

// valueはenumの方が良さそう
const selectOptions = [
  { label: "Eメール", value: "email" },
  { label: "Facebook", value: "facebook" },
  { label: "Twitter", value: "twitter" }
];

export default class Contact extends React.Component<Props> {
  // ここをcontainerに移してSFCにしたい
  handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { setContact } = this.props;
    const changeValue: ISetContact = {
      [e.target.name]: e.target.value
    };

    setContact(changeValue);
  }

  render() {
    const {
      contact: { name, email, type, details }
    } = this.props;
    return (
      <div className={styles.contact}>
        <h1 className={styles.title}>Contact</h1>
        <Input
          value={name}
          className={styles.field}
          onChange={e => this.handleChange(e)}
          name="name"
          label="名前"
        />
        {/* ここのコンポーネントを切り出して各媒体で表示を切り替える */}
        <Select
          value={type}
          className={styles.field}
          onChange={e => this.handleChange(e)}
          name="type"
          options={selectOptions}
          label="連絡方法"
        />
        <Input
          value={email}
          className={styles.field}
          onChange={e => this.handleChange(e)}
          name="email"
          label="連絡先"
        />
        {/* お問い合わせ目的も入れたい */}
        <Textarea
          value={details}
          className={styles.field}
          onChange={e => this.handleChange(e)}
          name="details"
          label="お問い合わせ内容"
        />
      </div>
    );
  }
}
