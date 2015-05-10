'use strict';

/**
 * @ngdoc function
 * @name hewanlucuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hewanlucuApp
 */
angular.module('hewanlucuApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.images = [
      'http://ppcdn.500px.org/52866292/9e944f286e9ba110135839dca1aff8a18e18ffe8/2048.jpg',
      'http://i.imgur.com/YY3bLP7.jpg',
      'http://i.imgur.com/9lDdLYR.jpg',
      'http://i.imgur.com/1mAzNUY.jpg',
      'https://ppcdn.500px.org/96496237/c4fed65b554428956caf9c1792fbe9ad88131b24/2048.jpg',
      'http://i.imgur.com/fYYulaI.jpg',
      'http://i.imgur.com/gVX4eUj.jpg',
      'http://i.imgur.com/P0b09BO.jpg',
      'http://i.imgur.com/Eq0Z7vm.jpg',
      'http://i.imgur.com/XxMKKi1.jpg'
    ];
    $scope.items = [
	    {
	        "id": "32dx81",
	        "title": "Our 3 day old baby chicks enjoying the warmth from my husband's coffee mug.",
	        "domain": "imgur.com",
	        "raw_url": "http://imgur.com/oPis3xl",
	        "img_urls": [
	            "http://i.imgur.com/oPis3xl.jpg"
	        ],
	        "ups": 6630,
	        "created": "2015-04-13T01:10:58.000Z",
	        "raw_created": 1428887458,
	        "permalink": "/r/aww/comments/32dx81/our_3_day_old_baby_chicks_enjoying_the_warmth/",
	        "num_comments": 1149
	    },
	    {
	        "id": "2zjj4n",
	        "title": "If I don't pet my dog immediately, he gets someone else to pet him then stares at me to see if I'm jealous.",
	        "domain": "imgur.com",
	        "raw_url": "http://imgur.com/s8duR8f",
	        "img_urls": [
	            "http://i.imgur.com/s8duR8f.jpg"
	        ],
	        "ups": 6424,
	        "created": "2015-03-19T10:18:18.000Z",
	        "raw_created": 1426760298,
	        "permalink": "/r/aww/comments/2zjj4n/if_i_dont_pet_my_dog_immediately_he_gets_someone/",
	        "num_comments": 847
	    },
	    {
	        "id": "2ylael",
	        "title": "Look at this little Rascal playing hide &amp; seek, daww.",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/lNOB7FW.gifv",
	        "img_urls": [
	            "http://i.imgur.com/lNOB7FW.gif"
	        ],
	        "ups": 6361,
	        "created": "2015-03-10T20:25:10.000Z",
	        "raw_created": 1426019110,
	        "permalink": "/r/aww/comments/2ylael/look_at_this_little_rascal_playing_hide_seek_daww/",
	        "num_comments": 331
	    },
	    {
	        "id": "2y6248",
	        "title": "This dog is not stuck...",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/zAE52it.jpg",
	        "img_urls": [
	            "http://i.imgur.com/zAE52it.jpg"
	        ],
	        "ups": 6421,
	        "created": "2015-03-06T19:55:04.000Z",
	        "raw_created": 1425671704,
	        "permalink": "/r/aww/comments/2y6248/this_dog_is_not_stuck/",
	        "num_comments": 535
	    },
	    {
	        "id": "2wgmu3",
	        "title": "Otters chasing a butterfly.",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/4nKQt3Q.gifv",
	        "img_urls": [
	            "http://i.imgur.com/4nKQt3Q.gif"
	        ],
	        "ups": 6746,
	        "created": "2015-02-19T19:29:37.000Z",
	        "raw_created": 1424374177,
	        "permalink": "/r/aww/comments/2wgmu3/otters_chasing_a_butterfly/",
	        "num_comments": 797
	    },
	    {
	        "id": "2m3wi0",
	        "title": "He LOVES snow. Won't even come inside.",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/FwgZFNn.jpg",
	        "img_urls": [
	            "http://i.imgur.com/FwgZFNn.jpg"
	        ],
	        "ups": 7298,
	        "created": "2014-11-12T20:42:37.000Z",
	        "raw_created": 1415824957,
	        "permalink": "/r/aww/comments/2m3wi0/he_loves_snow_wont_even_come_inside/",
	        "num_comments": 1472
	    },
	    {
	        "id": "2jpal5",
	        "title": "Trick your cat with a circle",
	        "domain": "imgur.com",
	        "raw_url": "http://imgur.com/a/ZcJ4A",
	        "img_urls": [
	            "http://i.imgur.com/a/ZcJ4A.jpg"
	        ],
	        "ups": 6384,
	        "created": "2014-10-19T17:47:38.000Z",
	        "raw_created": 1413740858,
	        "permalink": "/r/aww/comments/2jpal5/trick_your_cat_with_a_circle/",
	        "num_comments": 1388
	    },
	    {
	        "id": "2jaipj",
	        "title": "Remember the 'I have no idea what I'm doing dog'? I am her owner and here is a small album of more(better) pictures of her",
	        "domain": "imgur.com",
	        "raw_url": "http://imgur.com/a/WlgnC",
	        "img_urls": [
	            "http://i.imgur.com/a/WlgnC.jpg"
	        ],
	        "ups": 6995,
	        "created": "2014-10-15T06:11:20.000Z",
	        "raw_created": 1413353480,
	        "permalink": "/r/aww/comments/2jaipj/remember_the_i_have_no_idea_what_im_doing_dog_i/",
	        "num_comments": 656
	    },
	    {
	        "id": "2ektst",
	        "title": "they follow him everywhere",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/thO0kf0.jpg",
	        "img_urls": [
	            "http://i.imgur.com/thO0kf0.jpg"
	        ],
	        "ups": 6552,
	        "created": "2014-08-26T00:49:03.000Z",
	        "raw_created": 1409014143,
	        "permalink": "/r/aww/comments/2ektst/they_follow_him_everywhere/",
	        "num_comments": 453
	    },
	    {
	        "id": "2e3i50",
	        "title": "French bulldog puppy jumps into his owner's arms. Shows no hesitation second time around.",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/hcc0iD3.gif",
	        "img_urls": [
	            "http://i.imgur.com/hcc0iD3.gif"
	        ],
	        "ups": 14495,
	        "created": "2014-08-20T18:09:20.000Z",
	        "raw_created": 1408558160,
	        "permalink": "/r/aww/comments/2e3i50/french_bulldog_puppy_jumps_into_his_owners_arms/",
	        "num_comments": 838
	    },
	    {
	        "id": "2e38hm",
	        "title": "\"Pudding\" is a resident Fox at the National Fox Welfare Society, as he's too friendly to be released back to the wild.",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/S1OPVB6.jpg?1",
	        "img_urls": [
	            "http://i.imgur.com/S1OPVB6.jpg?1"
	        ],
	        "ups": 6541,
	        "created": "2014-08-20T16:42:59.000Z",
	        "raw_created": 1408552979,
	        "permalink": "/r/aww/comments/2e38hm/pudding_is_a_resident_fox_at_the_national_fox/",
	        "num_comments": 1031
	    },
	    {
	        "id": "2b8kc3",
	        "title": "A Black Leopard's reaction when he sees his favorite zoo keeper",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/VVlYLE8.gif",
	        "img_urls": [
	            "http://i.imgur.com/VVlYLE8.gif"
	        ],
	        "ups": 8823,
	        "created": "2014-07-20T21:57:43.000Z",
	        "raw_created": 1405893463,
	        "permalink": "/r/aww/comments/2b8kc3/a_black_leopards_reaction_when_he_sees_his/",
	        "num_comments": 1647
	    },
	    {
	        "id": "1urkrf",
	        "title": "My cat has one foggy eye. Add a bow tie and he instantly becomes a James Bond villain.",
	        "domain": "imgur.com",
	        "raw_url": "http://imgur.com/Cjn6NfS",
	        "img_urls": [
	            "http://i.imgur.com/Cjn6NfS.jpg"
	        ],
	        "ups": 11581,
	        "created": "2014-01-09T02:43:28.000Z",
	        "raw_created": 1389235408,
	        "permalink": "/r/aww/comments/1urkrf/my_cat_has_one_foggy_eye_add_a_bow_tie_and_he/",
	        "num_comments": 649
	    },
	    {
	        "id": "1safto",
	        "title": "French bulldog puppy meeting her human for the first time",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/xJaHdzV.gif",
	        "img_urls": [
	            "http://i.imgur.com/xJaHdzV.gif"
	        ],
	        "ups": 7778,
	        "created": "2013-12-07T02:26:39.000Z",
	        "raw_created": 1386383199,
	        "permalink": "/r/aww/comments/1safto/french_bulldog_puppy_meeting_her_human_for_the/",
	        "num_comments": 689
	    },
	    {
	        "id": "1sacc8",
	        "title": "I still think he is cute...",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/fQpmoXE.jpg",
	        "img_urls": [
	            "http://i.imgur.com/fQpmoXE.jpg"
	        ],
	        "ups": 7803,
	        "created": "2013-12-07T01:39:42.000Z",
	        "raw_created": 1386380382,
	        "permalink": "/r/aww/comments/1sacc8/i_still_think_he_is_cute/",
	        "num_comments": 520
	    },
	    {
	        "id": "1l7zcx",
	        "title": "We were worried they wouldn't get along",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/JoF5FNd.jpg",
	        "img_urls": [
	            "http://i.imgur.com/JoF5FNd.jpg"
	        ],
	        "ups": 9502,
	        "created": "2013-08-28T00:04:50.000Z",
	        "raw_created": 1377648290,
	        "permalink": "/r/aww/comments/1l7zcx/we_were_worried_they_wouldnt_get_along/",
	        "num_comments": 388
	    },
	    {
	        "id": "1krr0y",
	        "title": "Reddit, meet my rescue dog - Ellis! The difference 2 months can make.",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/4tVoRdf.jpg",
	        "img_urls": [
	            "http://i.imgur.com/4tVoRdf.jpg"
	        ],
	        "ups": 6740,
	        "created": "2013-08-21T01:17:34.000Z",
	        "raw_created": 1377047854,
	        "permalink": "/r/aww/comments/1krr0y/reddit_meet_my_rescue_dog_ellis_the_difference_2/",
	        "num_comments": 483
	    },
	    {
	        "id": "1ggdnl",
	        "title": "He is crying because he thinks he is locked out ... Dumb as a brick but he is mine and I love him.",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/aNMtZIP.jpg",
	        "img_urls": [
	            "http://i.imgur.com/aNMtZIP.jpg"
	        ],
	        "ups": 8045,
	        "created": "2013-06-16T15:25:02.000Z",
	        "raw_created": 1371396302,
	        "permalink": "/r/aww/comments/1ggdnl/he_is_crying_because_he_thinks_he_is_locked_out/",
	        "num_comments": 367
	    },
	    {
	        "id": "1fwcft",
	        "title": "Someone left this little guy at the subway i work at",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/vKXuucy.jpg",
	        "img_urls": [
	            "http://i.imgur.com/vKXuucy.jpg"
	        ],
	        "ups": 6257,
	        "created": "2013-06-08T01:12:18.000Z",
	        "raw_created": 1370653938,
	        "permalink": "/r/aww/comments/1fwcft/someone_left_this_little_guy_at_the_subway_i_work/",
	        "num_comments": 688
	    },
	    {
	        "id": "1cujh1",
	        "title": "Our dog is really good at balancing things on his head. Name a common household item for him to balance!",
	        "domain": "imgur.com",
	        "raw_url": "http://imgur.com/a/P0JEQ",
	        "img_urls": [
	            "http://i.imgur.com/a/P0JEQ.jpg"
	        ],
	        "ups": 6815,
	        "created": "2013-04-22T06:36:26.000Z",
	        "raw_created": 1366612586,
	        "permalink": "/r/aww/comments/1cujh1/our_dog_is_really_good_at_balancing_things_on_his/",
	        "num_comments": 1711
	    },
	    {
	        "id": "1by5fq",
	        "title": "kittens activate a vacuum",
	        "domain": "25.media.tumblr.com",
	        "raw_url": "http://25.media.tumblr.com/fe167e59b0cc0b111b6bc3c97f9958e8/tumblr_mkx75ziUvI1rnqolfo1_400.gif",
	        "img_urls": [
	            "http://25.media.tumblr.com/fe167e59b0cc0b111b6bc3c97f9958e8/tumblr_mkx75ziUvI1rnqolfo1_400.gif"
	        ],
	        "ups": 6844,
	        "created": "2013-04-08T23:29:08.000Z",
	        "raw_created": 1365463748,
	        "permalink": "/r/aww/comments/1by5fq/kittens_activate_a_vacuum/",
	        "num_comments": 202
	    },
	    {
	        "id": "1by5dt",
	        "title": "So there was a baby jaguar at my gf's house",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/6sm6L2R.jpg",
	        "img_urls": [
	            "http://i.imgur.com/6sm6L2R.jpg"
	        ],
	        "ups": 6431,
	        "created": "2013-04-08T23:28:31.000Z",
	        "raw_created": 1365463711,
	        "permalink": "/r/aww/comments/1by5dt/so_there_was_a_baby_jaguar_at_my_gfs_house/",
	        "num_comments": 494
	    },
	    {
	        "id": "13x8o5",
	        "title": "This cat is prettier than most humans",
	        "domain": "25.media.tumblr.com",
	        "raw_url": "http://25.media.tumblr.com/tumblr_mb50xf8S9c1rgw39go1_500.jpg",
	        "img_urls": [
	            "http://25.media.tumblr.com/tumblr_mb50xf8S9c1rgw39go1_500.jpg"
	        ],
	        "ups": 7135,
	        "created": "2012-11-28T06:45:45.000Z",
	        "raw_created": 1354085145,
	        "permalink": "/r/aww/comments/13x8o5/this_cat_is_prettier_than_most_humans/",
	        "num_comments": 740
	    },
	    {
	        "id": "13x78o",
	        "title": "My golden retriever made friends with a baby fox today. After I took this picture, they took nap together.",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/s1IqX.jpg",
	        "img_urls": [
	            "http://i.imgur.com/s1IqX.jpg"
	        ],
	        "ups": 6462,
	        "created": "2012-11-28T06:14:51.000Z",
	        "raw_created": 1354083291,
	        "permalink": "/r/aww/comments/13x78o/my_golden_retriever_made_friends_with_a_baby_fox/",
	        "num_comments": 262
	    },
	    {
	        "id": "zzg3k",
	        "title": "My local humane society posts pictures of new adoptions. This one makes me so happy.",
	        "domain": "i.imgur.com",
	        "raw_url": "http://i.imgur.com/w3FzB.jpg",
	        "img_urls": [
	            "http://i.imgur.com/w3FzB.jpg"
	        ],
	        "ups": 10816,
	        "created": "2012-09-16T20:46:09.000Z",
	        "raw_created": 1347828369,
	        "permalink": "/r/aww/comments/zzg3k/my_local_humane_society_posts_pictures_of_new/",
	        "num_comments": 800
	    }
	]

  });
