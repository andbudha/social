export const withAuthRedirect = (Component: any) => {
  const RedirectComponent = (props: any) => {
    return <Component {...props} />;
  };

  return RedirectComponent;
};
