class UserController {
    constructor (userView, requester, baseUrl, appKey) {
        this._userView = userView;
        this._requester = requester;
        this._appKey = appKey;
        this._baseServiceUrl = baseUrl + "/user/" + appKey + "/";
    }

    showLoginPage(isLoggedIn) {
        this._userView.showLoginPage(isLoggedIn);
    }
    
    showRegisterPage(isLoggedIn) {
        this._userView.showRegisterPage(isLoggedIn);
    }
    
    register(data) {
        if (data.username.length < 6) {
            showPopup('error', 'User name must be at least 6 symbols long.');
            return;
        }

        if (data.fullname.length < 6) {
            showPopup('error', 'Full name must be at least 6 symbols long.');
            return;
        }

        if (data.password != data.confirmPassword) {
            showPopup('error', 'Your passwords do not match.');
            return;
        }

        if (data.password.length < 7) {
            showPopup('error', 'Your password must be at least 7 symbols long.');
            return;
        }

        delete data['confirmPassword'];

        this._requester.post(this._baseServiceUrl, data, 
        function successCallback (response) {
            showPopup('success', 'Your account has been created!');
            redirectUrl('#/login');
        },
        function errorCallback (response) {
            showPopup('error', 'Registration is not successful!');
        });
    }
    
    login(data) {
        let requestUrl = this._baseServiceUrl + "login";
        this._requester.post(requestUrl, data, function successCallback (response) {
                sessionStorage.setItem('username', response.username);
                sessionStorage.setItem('_authToken', response._kmd.authtoken);
                sessionStorage.setItem('fullName', response.fullname);

                showPopup('success', 'You are logged in!');
                redirectUrl('#/home');
            },
            function errorCallback (response) {
                showPopup('error', 'Login is not successful!');
            });
    }  
    
    logout () {
        sessionStorage.clear();
        redirectUrl('#/');
    }
}