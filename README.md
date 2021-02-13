![alt text](https://i.imgur.com/Gm0ldDm.png)
# Bee API
## A minimalistic Api to fetch information from reddit



**Table of Contents**

1. [ ChangeLog. ](#ch)
2. [ Description. ](#dec)
3. [ Usage. ](#ue)
4. [ Options. ](#ops)
5. [ Details. ](#dt)
6. [ Contact information. ](#ci)



<a name="ChangeLog"></a>
## 1. ChangeLog
<ul>
<li>Added a nicer and more detailed readme</li>
<li>Added talbe of contents</li>
<li>Added contact infomation</li>
</ul>

<a name="Description"></a>
## 2. Description
A simple and fast wrapper for fetching data from reddit posts.


<a name="Usage "></a>
## 3. Usage

```javascript
const api = require('bee-api');

api({
    subreddit: 'cat',
    allowNSFW: false,
    allowModPost: true,
    allowCrossPost: true,
    allowVideo: true
}).then(post => {
    console.log(post);
});
```


<a name="Options"></a>
## 4. Options

Field | Type | Description | Default
| :--- | ---: | :---:  | :---: 
subreddit  | String  | .... | N/A
allowNSFW  | boolean | whether or not the returned post can be marked as NSFW | false
allowModPost  | boolean | whether or not the returned post can be distinguished as a mod post | false
allowCrossPost  | boolean | whether or not the returned post can be a crosspost | false
allowVideo  | boolean | whether or not the returned post can be a video | false


<a name="Details"></a>
## 5. Details
<ul>
<li>By default, the Reddit JSON API should not return any removed or deleted posts.</li>
<li>Unhandled rejections can be caught and handled:</li>
</ul>

```javascript
bla bla bla bla bla
}).then(post => {
    // some code here
}).catch(e => {
    console.error(`Rejection: ${e}`);
});
```

<a name="Contact information"></a>
## 6. Contact information

<ul>
<li>Discord: Nemijah#6392</li>
<li>Email: hopetobylol@gmailcom</li>
<li>Github: DaatUserName</li>
<li>Discord server: https://discord.gg/3MAuPMjh7f</li>
<li>feel free to ping me</li>
</ul>


**Future updates**
<ul>
<li>imgur api</li>
</ul>