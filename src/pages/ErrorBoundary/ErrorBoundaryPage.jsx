import React, { Component } from "react";
import s from "./ErrorBoundaryPage.module.scss";

import { ReactComponent as Error } from "../../shared/assets/images/Error.svg";

export class ErrorBoundaryPage extends Component {
  state = {
    hasError: false,
    error: {message: 'some error...'},
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className={s.wrapper}>
          <Error />
          <div>Ой, что-то пошло не так...</div>
          <div>
            В данный момент произошла ошибка, мы знаем о ней
            <br />и уже работаем над ее решением
          </div>
          <div>{error.message}</div>
        </div>
      );
    }

    return children;
  }
}
