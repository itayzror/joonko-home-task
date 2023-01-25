import {Redirect, Route} from "react-router-dom";
import Cookies from 'js-cookie';

const isAuthenticated = () => {
    const userCookie = Cookies.get('_user_session');
    return userCookie && JSON.parse(userCookie).email !== undefined;
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;