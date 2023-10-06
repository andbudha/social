export const withRouter = () => {
  return <div>Hi there!</div>;
};
// import { ComponentType } from 'react';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';

// export interface WithRouterProps {
//   location: ReturnType<typeof useLocation>;
//   params: Record<string, string>;
//   navigate: ReturnType<typeof useNavigate>;
// }
// export function withRouter<T>(Component: ComponentType<T>) {
//   function ComponentWithRouterProp(props: any) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return <Component {...props} router={{ location, navigate, params }} />;
//   }

//   return ComponentWithRouterProp;
// }
