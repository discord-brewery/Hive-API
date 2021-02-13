const fetch = require('node-fetch');
const FetchError = require('./errors/FetchError');

module.exports = async function redditFetch({ subreddit, allowNSFW, allowModPost, allowCrossPost, allowVideo }) {
    return new Promise((resolve, reject) => {


        if (!subreddit)
            return reject(new Error('Missing required argument "subreddit"'));

       if (typeof(subreddit) !== 'string')
            return reject(new TypeError(`Expected type "string" but got "${typeof(subreddit)}"`));

        if (allowNSFW && typeof(allowNSFW) !== 'boolean')
            return reject(new TypeError(`Expected type "boolean" but got "${typeof(allowNSFW)}"`));

  
        if (allowModPost && typeof(allowModPost) !== 'boolean')
            return reject(new TypeError(`Expected type "boolean" but got "${typeof(allowModPost)}"`));

    
        if (allowCrossPost && typeof(allowCrossPost) !== 'boolean')
            return reject(new TypeError(`Expected type "boolean" but got "${typeof(allowCrossPost)}"`));

        if (allowVideo && typeof(allowVideo) !== 'boolean')
            return reject(new TypeError(`Expected type "boolean" but got "${typeof(allowVideo)}"`));

        const targetURL = `https://reddit.com/r/${subreddit}.json`;

        fetch(targetURL).then(res => res.json())
            .then(body => {

                let found = body.data.children;

                if (!found.length)
                    return reject(new FetchError(`Unable to find a post. The subreddit "${subreddit}" does not exist, or it has no available post data.`));

                if (!allowNSFW)
                    found = found.filter(p => !p.data.over_18);

                if (!allowModPost)
                    found = found.filter(p => !p.data.distinguished);

                if (!allowCrossPost)
                    found = found.filter(p => !p.data.crosspost_parent_list);

                if (!allowVideo)
                    found = found.filter(p => !p.is_video);

                if (!found.length)
                    return reject(new FetchError('Unable to find a post that meets specified criteria. There may be an error in the options passed in.'));

                let randInt = Math.floor(Math.random() * found.length);
                resolve(found[randInt].data);

            });
    });
};