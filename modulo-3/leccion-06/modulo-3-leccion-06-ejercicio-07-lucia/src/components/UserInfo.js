import React from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Ada",
      lastName: "Lovelace",
      birthDate: {
        day: 10,
        month: "diciembre",
        year: 1815,
      },
    };
  }

  render() {
    return <form action=""></form>;
  }
}

export default UserInfo;
