import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };}

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };  }

  componentDidCatch(error, errorInfo) {
    console.log('Error:', error);
    console.log('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ border: '1px solid red', padding: '20px' }}>
          <h2>Something went wrong.</h2>
          <p>This part of the app crashed.</p>
        </div>
      );    }

    return this.props.children;
  }}

export default ErrorBoundary;

