class HomeView {
    constructor(wrapperSelector, mainContentSelector) {
        this._mainContentSelector = mainContentSelector;
        this._wrapperSelector = wrapperSelector;
    }

    showGuestPage(sideBarData, response) {
        let _that = this;

        $.get('templates/welcome-guest.html', function (template) {
            let renderedTemplate = Mustache.render(template, null);

            $(_that._wrapperSelector).html(renderedTemplate);

            $.get('templates/recent-posts.html', function (template) {
                let recentPosts = {
                    recentPosts: sideBarData
                };

                let renderedPosts = Mustache.render(template, recentPosts);
                $('.recent-posts').html(renderedPosts);
            });

            $.get('templates/posts.html', function (template) {
                let posts = {
                    blogPosts: response
                };

                let renderedPosts = Mustache.render(template, posts);
                $('#article').html(renderedPosts);
            });
        });
    }
    
    showUserPage(sideBarData, response) {
        let _that = this;
        $.get('templates/welcome-user.html', function (template) {
            let renderedTemplate = Mustache.render(template, null);

            $(_that._wrapperSelector).html(renderedTemplate);

            $.get('templates/recent-posts.html', function (template) {
                let recentPosts = {
                    recentPosts: sideBarData
                };

                let renderedPosts = Mustache.render(template, recentPosts);
                $('.recent-posts').html(renderedPosts);
            });

            $.get('templates/posts.html', function (template) {
                let posts = {
                    blogPosts: response
                };

                let renderedPosts = Mustache.render(template, posts);
                $('#article').html(renderedPosts);
            });
        });
    }
}
