import React, { Fragment } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import AuthanticatedLayout from '../../layouts/AuthanticatedLayout';

export default function ProtectedRoute(props) {
  const { loggedIn } = useAuth();

  if (loggedIn) {
    const { children: Component, ...rest } = props;
    return (
      <AuthanticatedLayout>
        <Component {...rest} />{' '}
      </AuthanticatedLayout>
    );
  }

  return <Navigate to="login" replace />;
}
