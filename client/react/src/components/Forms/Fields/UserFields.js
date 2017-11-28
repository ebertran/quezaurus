import React, { Component } from "react";

import InputForm from "../inputForm/InputFormText";
import InputFormRadio from "../inputForm/InputFormRadio";
import InputFormArea from "../inputForm/InputFormArea";

const UserFields = (props) => (
  <div>
    <InputForm
      type="text"
      id="username"
      placeholder="Enter username"
      changeState={props.changeState}
    />
    <InputForm
      type="email"
      id="email"
      placeholder="Enter email"
      changeState={props.changeState}
    />
    <InputForm
      type="password"
      id="password"
      placeholder="Enter password"
      changeState={props.changeState}
    />
    <InputForm
      type="text"
      id="name"
      placeholder="Enter name"
      changeState={props.changeState}
    />
    <InputForm
      type="text"
      id="surename"
      placeholder="Enter surename"
      changeState={props.changeState}
    />
    <InputForm
      type="date"
      id="birthdate"
      placeholder="Enter birthdate"
      changeState={props.changeState}
    />
    <InputFormRadio
      type="radio"
      id="sex"
      options={["female", "male", "trans", "other"]}
      changeState={props.changeState}
    />
    <InputForm
      type="text"
      id="zipcode"
      placeholder="Enter zipcode"
      changeState={props.changeState}
    />
    <InputFormRadio
      type="radio"
      id="education"
      options={["none", "primary", "secundary", "superior"]}
      changeState={props.changeState}
    />
    <InputFormRadio
      type="radio"
      id="occupation"
      options={["studying", "working", "unemployed", "retired"]}
      changeState={props.changeState}
    />
    <InputForm
      type="text"
      id="organization"
      placeholder="Enter organization"
      changeState={props.changeState}
    />
  </div>
);

export default UserFields;
